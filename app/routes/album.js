module.exports = function(application){
	application.get('/album', function(req, res){
		application.app.controllers.albumController.album(application, req, res);
	});

	application.get('/adminAlbum', function(req, res){
		application.app.controllers.albumController.adminAlbum(application, req, res);
	});

	application.get('/adminItemAlbum', function(req, res){
		application.app.controllers.albumController.adminItemAlbum(application, req, res);
	});

	application.get('/adminCadastrarAlbum', function(req, res){
		application.app.controllers.albumController.adminAlbumCadastrar(application, req, res);
	});

	application.post('/adicionarTipoAlbum', function(req, res){
		application.app.controllers.albumController.adicionrTipoAlbum(application, req, res);
	});

	application.post('/atualizaTipoAlbum', function(req, res){
		application.app.controllers.albumController.atualizaTipoAlbum(application, req, res);
	});

	application.post('/excluirTipoAlbum', function(req, res){
		application.app.controllers.albumController.excluiTipoAlbum(application, req, res);
	});

	application.post('/inserirAlbum', function(req, res){
		application.app.controllers.albumController.inserirAlbum(application, req, res);
	});

	application.post('/alterarAlbum', function(req, res){
		application.app.controllers.albumController.alterarAlbum(application, req, res);
	});

	application.post('/alterarAlbumFotos', function(req, res){
		application.app.controllers.albumController.alterarAlbumFotos(application, req, res);
	});

	application.post('/alterarFotos', function(req, res){
		application.app.controllers.albumController.alterarFotos(application, req, res);
	});

	application.post('/inserirFoto', function(req, res){
		application.app.controllers.albumController.inserirFoto(application, req, res);
	});

	application.post('/alteraFoto', function(req, res){
		application.app.controllers.albumController.alteraFoto(application, req, res);
	});

	application.post('/alteraAlbum', function(req, res){
		application.app.controllers.albumController.alteraAlbum(application, req, res);
	});

	application.post('/excluirAlbum', function(req, res){
		application.app.controllers.albumController.excluirAlbum(application, req, res);
	});

	application.post('/alteraFotoPort', function(req, res){
		application.app.controllers.albumController.alteraFotoPort(application, req, res);
	});

	application.post('/excluirFotoPort', function(req, res){
		application.app.controllers.albumController.excluirFotoPort(application, req, res);
	});
	
}