module.exports.sobre = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}

	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.abrirSobre(res);
}

module.exports.depoimentos = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.abrirDepoimentos(res);
}

module.exports.adicionaDepoimento = function(application, req, res){
	var dados = req.body;
	dados["status"] = false;
	dados["data"] = new Date();
	if(dados.fotoDepoi == ""){
		dados.fotoDepoi = "img/System/semFoto.svg";
	}

	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.inserirDepoimento(res, dados);
	res.render('confirmaDepoi');
}

module.exports.adminSobre = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	let connection = new application.config.dbConnection();
	let sdao = new application.app.dao.sobreDAO(connection);
	sdao.iniciaSobreAdmin(res);
}

module.exports.atualizaDadosSobre = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.atualizaDadosSobre(res, dados);
}

module.exports.mudarDepoimento = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	if(dados.statusDepoimento == "true"){
		dados.statusDepoimento = false;
	}else{
		dados.statusDepoimento = true;
	}
	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.statusDepoimento(res, dados);
}



module.exports.vizualizaDepoimento = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.findDepoimentoId(res, dados);
}

module.exports.excluirDepoimento = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return
	}

	var dados = req.body;
	var connection = new application.config.dbConnection();
	var sdao = new application.app.dao.sobreDAO(connection);
	sdao.dropDepoimentoId(res, dados);
}

module.exports.fileuploadSobre = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;
	let extencao = req.body.extencao;

	let path_origem = req.files.filetouploadLogo.path;
	let path_destino = ".\\app\\public\\img\\System\\" + arquivo + extencao;
	console.log(path_destino)
	
	fs.rename(path_origem, path_destino, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('adminSobre');
	});
}

module.exports.fileuploadSobre_default = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;
	let extencao = req.body.extencao;
	let path_origem = ".\\app\\public\\img\\System\\" + arquivo + "_backup" + extencao;
	let path_destino = ".\\app\\public\\img\\System\\" + arquivo + extencao;

	fs.createReadStream(path_origem).pipe(fs.createWriteStream(path_destino)); 
	res.redirect('adminSobre');
}