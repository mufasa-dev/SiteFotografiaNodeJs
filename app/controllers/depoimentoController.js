module.exports.adminDepoimento = function(application, req, res){
	if(req.session.autorizada != true){
		res.send('Erro ao acessar esta página.');
		return;		
	}
	let connection = new application.config.dbConnection();
	let sdao = new application.app.dao.sobreDAO(connection);
	sdao.iniciaDepoimentoAdmin(res);
}