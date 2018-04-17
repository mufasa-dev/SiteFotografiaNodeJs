function contatoDAO(connection){
	this._connection = connection;
}

//Pega todos os dados da collection index
contatoDAO.prototype.iniciaContato = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		const collection2 = db.collection('tipoAlbum');
		collection.find().toArray(function(err, result){
			dadosGeral = result;	
			collection2.find().toArray(function(err, result){
				tiposAlbum = result;
				res.render('Contato', {dadosIndex : dadosGeral, tipos : tiposAlbum});
				client.close();	
			});	
		});
	 });
}

//Pega todos os dados da collection index
contatoDAO.prototype.iniciaContatoAdmin = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('Admin-contato', {dadosIndex : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index
contatoDAO.prototype.atualizaDadosContato = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.update({id : 1}, {$set : dados})
		res.redirect('adminContato');
		client.close();		
	 });
}

//Exporta a função
module.exports = function(){
	return contatoDAO;
}