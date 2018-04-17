module.exports = function(application){
	application.get('/Sobre', function(req, res){
		application.app.controllers.sobreController.sobre(application, req, res);
	});

	application.get('/Depoimentos', function(req, res){
		application.app.controllers.sobreController.depoimentos(application, req, res);
	});

	application.post('/adicionaDepoimento', function(req, res){
		application.app.controllers.sobreController.adicionaDepoimento(application, req, res);
	});
	
	application.post('/vizualizaDepoimento', function(req, res){
		application.app.controllers.sobreController.vizualizaDepoimento(application, req, res);
	});

	application.post('/excluirDepoimento', function(req, res){
		application.app.controllers.sobreController.excluirDepoimento(application, req, res);
	});

	application.get('/adminSobre', function(req, res){
		application.app.controllers.sobreController.adminSobre(application, req, res);
	});

	application.post('/salvarDadosSobre', function(req, res){
		application.app.controllers.sobreController.atualizaDadosSobre(application, req, res);
	});

	application.post('/mudarDepoimento', function(req, res){
		application.app.controllers.sobreController.mudarDepoimento(application, req, res);
	});

	application.post('/fileuploadSobre', function(req, res){
		application.app.controllers.sobreController.fileuploadSobre(application, req, res);
	});

	application.post('/fileuploadSobre_default', function(req, res){
		application.app.controllers.sobreController.fileuploadSobre_default(application, req, res);
	});
}