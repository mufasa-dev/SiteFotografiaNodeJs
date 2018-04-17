module.exports.admin = function(application, req, res){
	if(req.session.autorizada){
		res.render('Admin');
	}else{
		res.redirect("adminLogin");
	}
}

//Abrir tela index admin
module.exports.adminIndex = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
	}

	var connection = new application.config.dbConnection();
	var idao = new application.app.dao.indexDAO(connection);
	idao.iniciaIndexAdmin(res);
}

module.exports.adminLogin = function(application, req, res){
	if(req.session.autorizada){
		res.redirect('admin');
	}else{
		res.render('Admin-login', {validacao : {}, dadosForm : {}});
	}	
}

module.exports.fazerLogin = function(application, req, res){
	var dadosForm = req.body;

	req.assert('nome', 'Favor informar o nome').notEmpty();
	req.assert('senha', 'Favor informar a senha').notEmpty();

	var erros = req.validationErrors();
	console.log(erros);

	if(erros){
		res.render("Admin-login", {validacao : erros, dadosForm : dadosForm});
		return;
	}

	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.validarLogin(dadosForm, req, res);

}

module.exports.adminSeguranca = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		
	}

	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.abrirSeguranca(req, res);
}

module.exports.adminImagemLateral = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		
	}

	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.abrirImagemLateral(res);
}

module.exports.adminImagemMiniPort = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		
	}

	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.abrirMiniPort(res);
}

module.exports.alterarUsuario = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		
	}

	var dados = req.body;

	if(dados.senha != dados.senhaConfirmar){
		res.render('Admin-seguranca', {erros : 'As senhas não são iguais', usuario : dados});
		return;
	}
	
	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.atualizaUsuario(dados, req, res);
}

module.exports.salvarMiniPort = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		
	}

	var dados = req.body;
	
	var connection = new application.config.dbConnection();

	var adao = new application.app.dao.adminDAO(connection);
	adao.atualizaMiniPort(dados, res);
}

module.exports.adminDescricao = function(application, req, res){
	if(req.session.autorizada){
		res.render('Admin-descricaoGeral');
	}else{
		res.send('Erro ao acessar esta página.');
	}
}

module.exports.adminSair = function(application, req, res){
	req.session.destroy(function(err){
		res.redirect("/");
	})
	
}
