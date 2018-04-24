module.exports.mensagemAdmin = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	var connection = new application.config.dbConnection();

	var mdao = new application.app.dao.mensagemDAO(connection);
	mdao.findMensagem(res);

	
	
}

module.exports.enviarMensagem = function(application, req, res){
	var dadosForm = req.body;
	dadosForm["data"] = new Date();
	dadosForm["status"] = false;

	var connection = new application.config.dbConnection();

	var mdao = new application.app.dao.mensagemDAO(connection);
	mdao.enviarMensagem(res, dadosForm);
}

module.exports.vizualizaMensagem = function(application, req, res){
	var dadosForm = req.body;
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	var connection = new application.config.dbConnection();

	var mdao = new application.app.dao.mensagemDAO(connection);
	mdao.findMensagemId(res, dadosForm);
}

module.exports.excluirMensagem = function(application, req, res){
	var dadosForm = req.body;
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	var connection = new application.config.dbConnection();

	var mdao = new application.app.dao.mensagemDAO(connection);
	mdao.dropMensagemId(res, dadosForm);
}