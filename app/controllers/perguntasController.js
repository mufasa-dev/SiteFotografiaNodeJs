module.exports.perguntas = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	var connection = new application.config.dbConnection();
	var pdao = new application.app.dao.perguntaDAO(connection);
	pdao.iniciaPerguntas(res);
}

module.exports.adminPergunta = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;		
	}
	
	var connection = new application.config.dbConnection();
	var pdao = new application.app.dao.perguntaDAO(connection);
	pdao.iniciaAdminPerguntas(res);
}

module.exports.inserirPergunta = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;		
	}
	
	var dados = req.body;
	var connection = new application.config.dbConnection();
	var pdao = new application.app.dao.perguntaDAO(connection);
	pdao.inserirPergunta(res, dados);
}

module.exports.atualizaPerguna = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;		
	}
	
	var dados = req.body;
	var connection = new application.config.dbConnection();
	var pdao = new application.app.dao.perguntaDAO(connection);
	pdao.atualizaPerguna(res, dados);
}

module.exports.excluirPergunta = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;		
	}
	
	var dados = req.body;
	var connection = new application.config.dbConnection();
	var pdao = new application.app.dao.perguntaDAO(connection);
	pdao.excluirPergunta(res, dados);
}