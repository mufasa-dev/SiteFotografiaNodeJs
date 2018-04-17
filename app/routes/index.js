module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.indexController.index(application, req, res);
	});

	application.get('/Inicio', function(req, res){
		application.app.controllers.indexController.indexInicio(application, req, res);
	});

	application.post('/salvaDadosIndex', function(req, res){
		application.app.controllers.indexController.atualizaDadosIndex(application, req, res);
	});

	application.post('/fileuploadlogo', function(req, res){
		application.app.controllers.indexController.fileuploadlogo(application, req, res);
	});

	application.post('/fileuploadlogo_default', function(req, res){
		application.app.controllers.indexController.fileuploadlogo_default(application, req, res);
	});

	application.post('/fileuploadLateral', function(req, res){
		application.app.controllers.indexController.fileuploadLateral(application, req, res);
	});

	application.post('/fileuploadLateralDefault', function(req, res){
		application.app.controllers.indexController.fileuploadLateralDefault(application, req, res);
	});

	application.post('/fileuploadMiniPort', function(req, res){
		application.app.controllers.indexController.fileuploadMiniPort(application, req, res);
	});

	application.post('/fileuploadMiniPortDefault', function(req, res){
		application.app.controllers.indexController.fileuploadMiniPortDefault(application, req, res);
	});

	
}