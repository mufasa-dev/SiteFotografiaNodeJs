function perguntaDAO(connection){
	this._connection = connection;
}

//Pega todos os dados da collection perguntas
perguntaDAO.prototype.iniciaAdminPerguntas = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('perguntas');
		collection.find().toArray(function(err, result){
			res.render('Admin-perguntas', {perguntas : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index, perguntas e tipos album
perguntaDAO.prototype.iniciaPerguntas = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var perguntas;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('perguntas');
		const collection = db.collection('index');
		const collection2 = db.collection('tipoAlbum');
		collection3.find().toArray(function(err, result){
			perguntas = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				collection2.find().toArray(function(err, result){
					tiposAlbum = result;
					res.render('Perguntas', {dadosIndex : dadosGeral, tipos : tiposAlbum, perguntas : perguntas});
					client.close();	
				});	
			});
		});
	 });
}

//Pega todos os dados da collection index
perguntaDAO.prototype.atualizaPerguna = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('perguntas');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.update({_id : o_id}, {$set : dados});
		res.redirect('adminPergunta');
		client.close();		
	 });
}

//Insere um novo tipo de álbum
perguntaDAO.prototype.inserirPergunta = function(res, pergunta){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('perguntas');
		collection.insert(pergunta);
		client.close();
	 	res.redirect('adminPergunta');
	 });
}

//Insere uma nova pergunta
perguntaDAO.prototype.excluirPergunta = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('perguntas');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.remove({_id : o_id});
		client.close();
	 	res.redirect('adminPergunta');
	 });
}

//Exporta a função
module.exports = function(){
	return perguntaDAO;
}