module.exports.album = function(application, req, res){
	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}
	
	res.render('Album');
}

module.exports.portfolio = function(application, req, res){
	let idAlbum = req.query.album;

	let divisao = req.query.divisao;

	if(divisao == undefined){
		res.redirect("/");
		return;
	}

	let connection = new application.config.dbConnection();
	let adao = new application.app.dao.albumDAO(connection);

	if(idAlbum == undefined){
		res.redirect("Album");
		return;
	}else{
		adao.iniciaPortfolio(res, idAlbum);
	}
}