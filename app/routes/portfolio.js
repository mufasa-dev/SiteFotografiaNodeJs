module.exports = function(application){
	application.get('/Portfolio', function(req, res){
		application.app.controllers.portfolioController.portfolio(application, req, res);
	});

	application.get('/Album', function(req, res){
		application.app.controllers.portfolioController.album(application, req, res);
	});
}