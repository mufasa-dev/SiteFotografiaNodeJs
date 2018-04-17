//Clicou no inicio
$('#framInicio').on('click', function () {
	$('#frameConfig').attr("src", 'adminIndex');

	$('#framMensagem').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framInicio').addClass("active");
});

//Clicou em mensagens
$('#framMensagem').on('click', function () {
	$('#frameConfig').attr("src", 'adminMensagem');

	$('#framInicio').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framMensagem').addClass("active");
});

//Clicou em Sobre mim
$('#framSobre').on('click', function () {
	$('#frameConfig').attr("src", 'adminSobre');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framSobre').addClass("active");
});

//Clicou em Depimentos
$('#framDepoi').on('click', function () {
	$('#frameConfig').attr("src", 'adminDepoimento');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framSobre').removeClass("active");

	$('#framDepoi').addClass("active");
});


//Clicou em itens dos albuns
$('#framTipoAlbum').on('click', function () {
	$('#frameConfig').attr("src", 'adminItemAlbum');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framTipoAlbum').addClass("active");
});

//Clicou em albuns
$('#framAlbuns').on('click', function () {
	$('#frameConfig').attr("src", 'adminAlbum');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framAlbuns').addClass("active");
});

//Clicou em perguntas
$('#framPerguntas').on('click', function () {
	$('#frameConfig').attr("src", 'adminPergunta');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framPerguntas').addClass("active");
});

//Clicou em contatos
$('#framContato').on('click', function () {
	$('#frameConfig').attr("src", 'adminContato');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framContato').addClass("active");
});

//Clicou em Segurança
$('#framSenha').on('click', function () {
	$('#frameConfig').attr("src", 'adminSeguranca');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framInfo').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framSenha').addClass("active");
});

//Clicou em Descrição geral
$('#framInfo').on('click', function () {
	$('#frameConfig').attr("src", 'adminDescricao');

	$('#framInicio').removeClass("active");
	$('#framMensagem').removeClass("active");
	$('#framTipoAlbum').removeClass("active");
	$('#framAlbuns').removeClass("active");
	$('#framPerguntas').removeClass("active");
	$('#framSobre').removeClass("active");
	$('#framContato').removeClass("active");
	$('#framSenha').removeClass("active");
	$('#framDepoi').removeClass("active");

	$('#framInfo').addClass("active");
});