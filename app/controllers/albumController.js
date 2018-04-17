module.exports.album = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	let tipo = req.query.tipo;

	let connection = new application.config.dbConnection();
	let adao = new application.app.dao.albumDAO(connection);

	if(tipo == undefined){
		adao.iniciaAlbum(res);
	}else{
		adao.iniciaAlbumTipo(res, tipo);
	}
	

	//
}

module.exports.adminAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.iniciaAlbumAdmin(res);
}

module.exports.adminAlbumCadastrar = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.iniciaAlbumCadastrarAdmin(res);
}

//Inserir novo Álbum
module.exports.inserirAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;
	if(dados.fotoCapa == ""){
		dados.fotoCapa = "img/System/album_default.jpg";
	}

	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.inserirAlbum(dados);
	res.redirect('adminAlbum');
}

//Alterar Album
module.exports.alterarAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.findAlbumId(res, dados);
}

module.exports.alteraAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.alteraAlbum(res, dados);
}

//Alterar Album fotos
module.exports.alterarAlbumFotos = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.iniciaPortfolioAdmin(res, dados);
}

//Excluir Album
module.exports.excluirAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.dropAlbumId(res, dados);
}


//Alterar  fotos portfólio
module.exports.alteraFotoPort = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.alteraFotoPort(res, dados);
}

//Excluir Album
module.exports.excluirFotoPort = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;


	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.excluirFotoPort(res, dados);
}


module.exports.adminItemAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var connection = new application.config.dbConnection();
	var tadao = new application.app.dao.tipoAlbumDAO(connection);
	tadao.iniciaAdminTipoAlbum(res);
}


module.exports.adicionrTipoAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var tadao = new application.app.dao.tipoAlbumDAO(connection);
	tadao.inserirTipoAlbum(res, dados);
}

//Inserir novo Álbum
module.exports.inserirFoto = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}
	let dados = req.body;

	var connection = new application.config.dbConnection();
	var adao = new application.app.dao.albumDAO(connection);
	adao.inserirFoto(dados);
	res.redirect('adminAlbum');
}

module.exports.atualizaTipoAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var tadao = new application.app.dao.tipoAlbumDAO(connection);
	tadao.atualizaDadosTipoAlbum(res, dados);
}

module.exports.excluiTipoAlbum = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var tadao = new application.app.dao.tipoAlbumDAO(connection);
	tadao.excluiTipoAlbum(res, dados);
}