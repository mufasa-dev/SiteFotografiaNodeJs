module.exports.index = function(application, req, res){
	var connection = new application.config.dbConnection();
	var idao = new application.app.dao.indexDAO(connection);
	idao.iniciaIndex(res);
}

module.exports.indexInicio = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	var connection = new application.config.dbConnection();
	var idao = new application.app.dao.indexDAO(connection);
	idao.iniciaIndexInicio(res);
}

module.exports.atualizaDadosIndex = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
	}
	var dados = req.body;
	var connection = new application.config.dbConnection();
	var idao = new application.app.dao.indexDAO(connection);
	idao.atualizaDadosIndex(res, dados);
}

module.exports.fileuploadlogo = function(application, req, res){
	var fs = require('fs');
	let path_origem = req.files.filetouploadLogo.path;
	let path_destino = ".\\app\\public\\img\\System\\logo.png";

	fs.rename(path_origem, path_destino, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('adminIndex');
	});
}

module.exports.fileuploadlogo_default = function(application, req, res){
	var fs = require('fs');
	let path_origem = ".\\app\\public\\img\\System\\logo_backup.png";
	let path_destino = ".\\app\\public\\img\\System\\logo.png";

	fs.createReadStream(path_origem).pipe(fs.createWriteStream(path_destino)); 
	res.redirect('adminIndex');
}

module.exports.fileuploadLateral = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;

	let path_origem = req.files.filetouploadLogo.path;
	let path_destino = ".\\app\\public\\img\\Portifolio\\" + arquivo + ".jpg";
	console.log(path_destino)
	
	fs.rename(path_origem, path_destino, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('adminIndex');
	});
}

module.exports.fileuploadLateralDefault = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;
	let path_origem = ".\\app\\public\\img\\Portifolio\\" + arquivo + "_backup.jpg";
	let path_destino = ".\\app\\public\\img\\Portifolio\\" + arquivo + ".jpg";

	fs.createReadStream(path_origem).pipe(fs.createWriteStream(path_destino)); 
	res.redirect('adminIndex');
}

module.exports.fileuploadMiniPort = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;
	
	let path_origem = req.files.filetouploadLogo.path;
	let path_destino = ".\\app\\public\\img\\Portifolio\\mini\\" + arquivo + ".jpg";
	console.log(path_destino)
	
	fs.rename(path_origem, path_destino, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('adminIndex');
	});
}

module.exports.fileuploadMiniPortDefault = function(application, req, res){
	var fs = require('fs');
	let arquivo = req.body.arquivo;
	let path_origem = ".\\app\\public\\img\\Portifolio\\mini_backup\\" + arquivo + ".jpg";
	let path_destino = ".\\app\\public\\img\\Portifolio\\mini\\" + arquivo + ".jpg";

	fs.createReadStream(path_origem).pipe(fs.createWriteStream(path_destino)); 
	res.redirect('adminIndex');
}