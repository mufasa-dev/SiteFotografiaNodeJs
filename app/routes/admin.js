module.exports = function(application){
	application.get('/admin', function(req, res){
		application.app.controllers.adminController.admin(application, req, res);
	});

	application.get('/adminIndex', function(req, res){
		application.app.controllers.adminController.adminIndex(application, req, res);
	});

	application.get('/adminLogin', function(req, res){
		application.app.controllers.adminController.adminLogin(application, req, res);
	});

	application.post('/fazerLogin', function(req, res){
		application.app.controllers.adminController.fazerLogin(application, req, res);
	});

	application.get('/adminSeguranca', function(req, res){
		application.app.controllers.adminController.adminSeguranca(application, req, res);
	});

	application.post('/alterarUsuario', function(req, res){
		application.app.controllers.adminController.alterarUsuario(application, req, res);
	});

	application.get('/adminDescricao', function(req, res){
		application.app.controllers.adminController.adminDescricao(application, req, res);
	});

	application.get('/adminImagemLateral', function(req, res){
		application.app.controllers.adminController.adminImagemLateral(application, req, res);
	});

	application.get('/adminImagemMiniPort', function(req, res){
		application.app.controllers.adminController.adminImagemMiniPort(application, req, res);
	});

	application.post('/salvarMiniPort', function(req, res){
		application.app.controllers.adminController.salvarMiniPort(application, req, res);
	});

	application.get('/adminSair', function(req, res){
		application.app.controllers.adminController.adminSair(application, req, res);
	});
}