function adminDAO(connection){
	this._connection = connection;
}

adminDAO.prototype.validarLogin = function(usuario, req, res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
 
		const collection = db.collection('usuarios');
		collection.find({nome : {$eq : usuario.nome}, senha : {$eq : usuario.senha}}).toArray(function(err, result){
			if(result[0] != undefined){
				req.session.autorizada = true;
				req.session.usuario = usuario.nome;
				req.session.idUsuario = result[0]._id;
				res.redirect("Admin");
			}else{
				res.render("Admin-login", {validacao : [{param : "nome", msg : "Usuário ou senha invalidos"}], dadosForm : usuario});
			}

		});
		client.close();
	 
	 });
}

//Mini portfólio
adminDAO.prototype.abrirImagemLateral = function(res){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('Admin-imagemLateral', {dadosIndex : result});
			client.close();
		});
	 });
}

adminDAO.prototype.atualizaImagemLateral = function(dados, res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.update({id : 1}, {$set : dados})
		res.redirect('adminIndex');
		client.close();		
	 });
}

adminDAO.prototype.atualizaMiniPort = function(dados, res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.update({id : 1}, {$set : dados})
		res.redirect('adminIndex');
		client.close();		
	 });
}

//Pega todos os dados da collection index
adminDAO.prototype.abrirMiniPort = function(res){

	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('index');
		collection.find().toArray(function(err, result){
			res.render('Admin-miniPort', {dadosIndex : result});
			client.close();
		});
	 });
}

adminDAO.prototype.abrirSeguranca = function(req, res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('usuarios');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(req.session.idUsuario);
		collection.find({_id : o_id}).toArray(function(err, result){
			res.render('Admin-seguranca', {erros : '', usuario : result[0]});
			client.close();	

		});
			
	 });
}

adminDAO.prototype.atualizaUsuario = function(dados, req, res){
	var mongoConnected = this._connection.connectToMongo(function(client, db){
		const collection = db.collection('usuarios');
		var ObjectId = require('mongodb').ObjectId; 
		var o_id = new ObjectId(req.session.idUsuario);
		collection.find({_id : o_id}).toArray(function(err, result){

			if(result[0].senha == dados.senhaAtual){
				collection.update({_id : o_id}, {$set : {senha : dados.senha, nome : dados.nome}});
				res.redirect('adminSeguranca');
				client.close();	
			}else{
				res.render('Admin-seguranca', {erros : 'A senha atual esta incorreta', usuario : dados});
			}

		});
			
	 });
}

module.exports = function(){
	return adminDAO;
}