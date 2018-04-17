module.exports.contato = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	let connection = new application.config.dbConnection();
	let cdao = new application.app.dao.contatoDAO(connection);
	cdao.iniciaContato(res);
}

module.exports.novaMensagem = function(application, req, res){
	res.send('Mensagem enviada');
}

module.exports.adminContato = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;
	}
		
	let connection = new application.config.dbConnection();
	let cdao = new application.app.dao.contatoDAO(connection);
	cdao.iniciaContatoAdmin(res);
}

module.exports.atualizaDadosContato = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;
	}
		
	let dados = req.body;
	let connection = new application.config.dbConnection();
	let cdao = new application.app.dao.contatoDAO(connection);
	cdao.atualizaDadosContato(res, dados);
	
}


module.exports.fileuploadContato = function(application, req, res){
	var fs = require('fs');
	let path_origem = req.files.filetouploadLogo.path;
	let path_destino = ".\\app\\public\\img\\System\\miniCam.jpg";

	fs.rename(path_origem, path_destino, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('adminContato');
	});
}

module.exports.fileuploadContatoDefault = function(application, req, res){
	var fs = require('fs');
	let path_origem = ".\\app\\public\\img\\System\\miniCam_backup.jpg";
	let path_destino = ".\\app\\public\\img\\System\\miniCam.jpg";

	fs.createReadStream(path_origem).pipe(fs.createWriteStream(path_destino)); 
	res.redirect('adminContato');
}