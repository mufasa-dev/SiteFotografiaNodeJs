module.exports = function(application){
	application.get('/Perguntas', function(req, res){
		application.app.controllers.perguntasController.perguntas(application, req, res);
	});

	application.get('/adminPergunta', function(req, res){
		application.app.controllers.perguntasController.adminPergunta(application, req, res);
	});

	application.post('/inserirPergunta', function(req, res){
		application.app.controllers.perguntasController.inserirPergunta(application, req, res);
	});

	application.post('/atualizaPerguna', function(req, res){
		application.app.controllers.perguntasController.atualizaPerguna(application, req, res);
	});

	application.post('/excluirPergunta', function(req, res){
		application.app.controllers.perguntasController.excluirPergunta(application, req, res);
	});
}