function tipoAlbumDAO(connection){
	this._connection = connection;
}

//Pega todos os dados da collection index
tipoAlbumDAO.prototype.iniciaAdminTipoAlbum = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('tipoAlbum');
		collection.find().toArray(function(err, result){
			res.render('Admin-itemAlbum', {tipos : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index
tipoAlbumDAO.prototype.atualizaDadosTipoAlbum = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('tipoAlbum');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.update({_id : o_id}, {$set : dados});
		res.redirect('adminItemAlbum');
		client.close();		
	 });
}

//Insere um novo tipo de álbum
tipoAlbumDAO.prototype.inserirTipoAlbum = function(res, nomeAlbum){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('tipoAlbum');
		collection.insert(nomeAlbum);
		client.close();
	 	res.redirect('adminItemAlbum');
	 });
}

//Insere um novo tipo de álbum
tipoAlbumDAO.prototype.excluiTipoAlbum = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('tipoAlbum');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(dados.idItem);
		collection.remove({_id : o_id});
		client.close();
	 	res.redirect('adminItemAlbum');
	 });
}

//Exporta a função
module.exports = function(){
	return tipoAlbumDAO;
}