module.exports = function(application){
	application.post('/enviarMensagem', function(req, res){
		application.app.controllers.mensagemController.enviarMensagem(application, req, res);
	});

	application.get('/adminMensagem', function(req, res){
		application.app.controllers.mensagemController.mensagemAdmin(application, req, res);
	});

	application.post('/vizualizaMensagem', function(req, res){
		application.app.controllers.mensagemController.vizualizaMensagem(application, req, res);
	});

	application.post('/excluirMensagem', function(req, res){
		application.app.controllers.mensagemController.excluirMensagem(application, req, res);
	});

	
}