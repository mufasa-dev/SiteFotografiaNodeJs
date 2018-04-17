module.exports = function(application){
	application.get('/adminDepoimento', function(req, res){
		application.app.controllers.depoimentoController.adminDepoimento(application, req, res);
	});
};