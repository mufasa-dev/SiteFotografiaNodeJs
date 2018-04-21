function indexDAO(connection){
	this._connection = connection;
}

//Pega todos os dados da collection index
indexDAO.prototype.iniciaIndexAdmin = function(res){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('Admin-index', {dadosIndex : result});
			client.close();
		});
	 });
}

//Pega todos os dados da collection index, contato, tipos album
indexDAO.prototype.iniciaIndex = function(res){
	var dadosGeral;
	var tiposAlbum;	
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		const collection2 = db.collection('tipoAlbum');
		collection.find().toArray(function(err, result){
			dadosGeral = result;
			if(dadosGeral[0].bloqueio == "no"){
				res.render('bloqueio', {dadosIndex : dadosGeral});
				client.close();	
			}else	
			{collection2.find().toArray(function(err, result){
				tiposAlbum = result;
				res.render('index', {dadosIndex : dadosGeral, tipos : tiposAlbum});
				client.close();	
			});}	
		});
	 });
}

indexDAO.prototype.iniciaIndexInicio = function(res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('indexInicio', {dadosIndex : result});
			client.close();	
		});	
	 });
}


//Pega todos os dados da collection index
indexDAO.prototype.atualizaDadosIndex = function(res, dados){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.update({id : 1}, {$set : dados})
		res.redirect('adminIndex');
		client.close();		
	 });
}

//Exporta a função
module.exports = function(){
	return indexDAO;
}