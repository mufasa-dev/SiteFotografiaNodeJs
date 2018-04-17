function sobreDAO(connection){
	this._connection = connection;
}

//Pega todos os dados da collection index
sobreDAO.prototype.iniciaSobreAdmin = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('Admin-sobre', {dadosIndex : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index e depoimentos
sobreDAO.prototype.abrirSobre = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var Depoimento;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('depoimento');
		const collection = db.collection('index');
		collection3.find({status : true}).sort({data : -1}).limit(2).toArray(function(err, result){
			Depoimento = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				
				res.render('Sobre', {dadosIndex : dadosGeral, depoimentos : Depoimento});
				client.close();	
					
			});
		});
	 });
}

//Pega todos os dados da collection index e depoimentos
sobreDAO.prototype.abrirDepoimentos = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var Depoimento;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection3 = db.collection('depoimento');
		const collection = db.collection('index');
		collection3.find({status : true}).sort({data : -1}).toArray(function(err, result){
			Depoimento = result;
			collection.find().toArray(function(err, result){
				dadosGeral = result;	
				res.render('Depoimentos', {dadosIndex : dadosGeral, tipos : tiposAlbum, depoimentos : Depoimento});
				client.close();	
					
			});
		});
	 });
}

//Pega todos os dados da collection index
sobreDAO.prototype.iniciaDepoimentoAdmin = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('depoimento');
		collection.find().toArray(function(err, result){
			res.render('Admin-depoimentos', {depoimentos : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index
sobreDAO.prototype.atualizaDadosSobre = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.update({id : 1}, {$set : dados})
		res.redirect('adminSobre');
		client.close();		
	 });
}

//Insere um novo depoimento
sobreDAO.prototype.inserirDepoimento = function(res, depoimento){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('depoimento');
		collection.insert(depoimento);
		client.close();
	 });
}

//Encontrar Depoimento por id
sobreDAO.prototype.findDepoimentoId = function(res, depoimento){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('depoimento');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(depoimento.idItem);
		console.log(o_id)
		collection.find({_id : o_id}).toArray(function(err, result){			
			res.render("Admin-depoimento", {depoimento : result});
		});
		client.close();
	 
	 });
}

//Altera status do Depoimento
sobreDAO.prototype.statusDepoimento = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('depoimento');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idDepoimento);
		collection.update({_id : o_id}, {$set : {status : dados.statusDepoimento}})
		res.redirect('adminDepoimento');
		client.close();		
	 });
}

//Excluir depoimento
sobreDAO.prototype.dropDepoimentoId = function(res, depoimento){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('depoimento');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(depoimento.idItem);
		collection.remove({_id : o_id});
		res.redirect("adminDepoimento");
		client.close();
	 
	 });
}

//Exporta a função
module.exports = function(){
	return sobreDAO;
}