module.exports = function(application){
	application.get('/Contato', function(req, res){
		application.app.controllers.contatoController.contato(application, req, res);
	});

	application.post('/novaMensagem', function(req, res){
		application.app.controllers.contatoController.novaMensagem(application, req, res);
	});

	application.get('/adminContato', function(req, res){
		application.app.controllers.contatoController.adminContato(application, req, res);
	});

	application.post('/salvarDadosContato', function(req, res){
		application.app.controllers.contatoController.atualizaDadosContato(application, req, res);
	});

	application.post('/fileuploadContato', function(req, res){
		application.app.controllers.contatoController.fileuploadContato(application, req, res);
	});

	application.post('/fileuploadContatoDefault', function(req, res){
		application.app.controllers.contatoController.fileuploadContatoDefault(application, req, res);
	});
}