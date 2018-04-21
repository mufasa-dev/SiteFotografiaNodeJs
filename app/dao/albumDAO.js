function albumDAO(connection){
	this._connection = connection;
}

//Pega todos os valores de albuns, index e tipos de álbem
albumDAO.prototype.iniciaAlbum = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var album;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('album');
		const collection = db.collection('index');
		collection3.find().toArray(function(err, result){
			album = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				
				res.render('Album', {dadosIndex : dadosGeral, albuns : album});
				client.close();	
			
			});
		});
	 });
}

//Abrir album com consulta pelo tipo
albumDAO.prototype.iniciaAlbumTipo = function(res, type){
	var dadosGeral;
	var tiposAlbum;	
	var album;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('album');
		const collection = db.collection('index');
		collection3.find({tipo : type}).toArray(function(err, result){
			album = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				
				res.render('Album', {dadosIndex : dadosGeral, tipos : tiposAlbum, albuns : album});
				client.close();	
				
			});
		});
	 });
}

//Abrir portifolio com consulta pelo id do album
albumDAO.prototype.iniciaPortfolio = function(res, idAlbum){
	var dadosGeral;
	var tiposAlbum;	
	var album;	
	var portfolio;
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('album');
		const collection = db.collection('index');
		const collection2 = db.collection('tipoAlbum');
		const collection4 = db.collection('portfolio');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(idAlbum);
		collection3.find({_id : o_id}).toArray(function(err, result){
			album = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				collection2.find().toArray(function(err, result){
					tiposAlbum = result;
					collection4.find({idAlbum : idAlbum}).toArray(function(err, result){
						portfolio = result;
						res.render('Portfolio', {dadosIndex : dadosGeral, tipos : tiposAlbum, albuns : album, portfolio : portfolio});
						client.close();	
					});	
				});	
			});
		});
	 });
}

//Pega todos os dados da collection index
albumDAO.prototype.iniciaAlbumAdmin = function(res){
	var album;
	var tiposAlbum;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('album');
		const collection2 = db.collection('tipoAlbum');
		collection.find().toArray(function(err, result){
			album = result;	
			collection2.find().toArray(function(err, result){
				tiposAlbum = result;
				res.render('Admin-album', {albuns : album, tipos : tiposAlbum});
				client.close();	
			});	
		});
	 });
}

//Pega todos os dados da collection album e portfolio
albumDAO.prototype.iniciaPortfolioAdmin = function(res, dados){
	var album;
	var portfolio;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('album');
		const collection2 = db.collection('portfolio');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.find({_id : o_id}).toArray(function(err, result){
			album = result;	
			collection2.find({idAlbum : dados.idItem}).toArray(function(err, result){
				portfolio = result;
				res.render('Admin-albumAlterarFoto', {albuns : album, portfolio : portfolio});
				client.close();	
			});	
		});
	 });
}

albumDAO.prototype.inserirAlbum = function(album){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('album');
		collection.insert(album);
		client.close();
	 });
}

albumDAO.prototype.inserirFoto = function(portfolio){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('portfolio');
		collection.insert(portfolio);
		client.close();
	 });
}

//Excluir album
albumDAO.prototype.dropAlbumId = function(res, album){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('album');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(album.idItem);
		collection.remove({_id : o_id});
		res.redirect("adminAlbum");
		client.close();	 
	 });
}

//Altera os dados da foto do portfolio
albumDAO.prototype.alteraFotoPort = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('portfolio');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.update({_id : o_id}, {$set : {nomeFoto : dados.nomeFoto, url : dados.url}})
		res.redirect('adminAlbum');
		client.close();		
	 });
}

//Excluir foto do portfólio
albumDAO.prototype.excluirFotoPort = function(res, album){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('portfolio');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(album.idItem);
		collection.remove({_id : o_id});
		res.redirect("adminAlbum");
		client.close();	 
	 });
}

//Achar album via id
albumDAO.prototype.findAlbumId = function(res, album){
	var album2;
	var tiposAlbum;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('album');
		const collection2 = db.collection('tipoAlbum');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(album.idItem);
		collection.find({_id : o_id}).toArray(function(err, result){
			album2 = result;
			collection2.find().toArray(function(err, result2){

				res.render('Admin-albumAlterar', {albuns : album2, tipos : result2});
				client.close();	
			});				
		});
	 
	 });
}

//Altera os dados do album
albumDAO.prototype.alteraAlbum = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		console.log(dados)
		const collection = db.collection('album');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.update({_id : o_id}, {$set : {nome : dados.nome, descriAlbum : dados.descriAlbum,
			tipo : dados.tipo,fotoCapa : dados.fotoCapa}})
		res.redirect('adminAlbum');
		client.close();		
	 });
}

//Pega todos os dados dos tipos de álbuns
albumDAO.prototype.iniciaAlbumCadastrarAdmin = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('tipoAlbum');
		collection.find().toArray(function(err, result){
			res.render('Admin-albumCadastrar', {tipos : result});
			client.close();	
		});
	 });
}

//Exporta a função
module.exports = function(){
	return albumDAO;
}