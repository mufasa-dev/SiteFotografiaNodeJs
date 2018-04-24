function mensagemDAO(connection){
	this._connection = connection;
}

mensagemDAO.prototype.enviarMensagem = function(res, mensagem){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('mensagem');
		collection.insert(mensagem);
		const collection2 = db.collection('index');
		collection2.find().toArray(function(err, result){
			res.render('confirmaMensagem', {dadosIndex : result});
			client.close();
		});
		
		client.close();
	 
	 });
}

mensagemDAO.prototype.findMensagem = function(res){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('mensagem');
		collection.find().toArray(function(err, result){			
			res.render("Admin-mensagens", {mensagens : result});
		});
		client.close();
	 
	 });
}

mensagemDAO.prototype.findMensagemId = function(res, mensagem){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('mensagem');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(mensagem.idItem);
		collection.findAndModify({_id : o_id},
		  [],
		  { $set: { status: true }},
		  { new: true }, 
		  function(err,result) {
			console.log(result)
		    res.render("Admin-mensagem", {mensagens : result});
			client.close();
	   });		 
	 });
}

mensagemDAO.prototype.dropMensagemId = function(res, mensagem){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('mensagem');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(mensagem.idItem);
		collection.remove({_id : o_id});
		res.redirect("adminMensagem");
		client.close();	 
	 });
}




module.exports = function(){
	return mensagemDAO;
}