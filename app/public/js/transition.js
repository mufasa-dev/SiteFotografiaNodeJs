$('#btnMenos').on('click', function () {
  $('#btnMenos').prop("disabled",true);
  if ($('#pg1').hasClass('divisao')) {
    $('#pg1').removeClass('divisao');
    $('#pg2').removeClass('divisao2');
    $('#pg1').addClass('divisao_default');
    $('#pg2').addClass('divisao2_full');
    $('#fundo').removeClass('fundo');
    $('#fundo').addClass('fundo2');
    document.getElementById("carregando").style.left = "calc(50% - 125px)";

    $('#descriSobre').removeClass('col-12');
    $('#descriSobre').addClass('col-md-5 col-lg-5');
    $('.depoi').removeClass('col-12');
    $('.depoi').addClass('col-6');

    $('#posicaoTela').val("divisao_default");
    document.getElementById("posicaoTela").value = "divisao_default";
    document.body.style.overflow = '';
    $('#btnMenos').prop("disabled",false);
    $('#btnMais').prop("disabled",false);
    return;
  };

  if ($('#pg1').hasClass('divisao_full')) {
    $('#pg1').removeClass('divisao_full');
    $('#pg2').removeClass('divisao2_default');
    $('#pg1').addClass('divisao');
    $('#pg2').addClass('divisao2');
    $('#fundo').removeClass('fundo3');
    $('#fundo').addClass('fundo');
    $('#posicaoTela').val("divisao");
    document.getElementById("posicaoTela").value = "divisao";
    $('.depoi').removeClass('col-6');
    $('.depoi').addClass('col-12');
      
    $('#descriSobre').removeClass('col-md-5 col-lg-5');
    $('#descriSobre').addClass('col-12');

    document.body.style.overflow = '';
    $('#btnMenos').prop("disabled",false);
    $('#btnMais').prop("disabled",false);
    return;
  }
});



$(".linkSobre").on('click', function(){
	if(document.getElementById("local").value != "sobre"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : 'Sobre?divisao=sobre',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val("sobre");	
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}
});

$(".linkInicio").on('click', function(){
	if(document.getElementById("local").value != "inicio"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/Inicio?divisao=inicio',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})	
		$('#local').val("inicio");	
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
		document.getElementById("caroucel").value = "index";
	}
});

$(".linkDepoi").on('click', function(){
	if(document.getElementById("local").value != "depoi"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/Depoimentos?divisao=depoi',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val("depoi");
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}		
});

$(".linkContato").on('click', function(){
	if(document.getElementById("local").value != "contato"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/Contato?divisao=contato',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val("contato");
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}		
});

$(".linkPerguntas").on('click', function(){
	if(document.getElementById("local").value != "perguntas"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/Perguntas?divisao=perguntas',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val("perguntas");
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}		
});

$(".linkAlbum").on('click', function(){
	if(document.getElementById("local").value != "album"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/Album?divisao=album',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val("album");
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}		
});

function abrirTipoAlbum(id){
  if(document.getElementById("local").value != id){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/' + id + '&divisao=sobre',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val(id);
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
	}	
}

function abrirPort(id){
    if(document.getElementById("local").value != id){
    	$('#pg1').removeClass('divisao');
	    $('#pg2').removeClass('divisao2');
	    $('#pg1').addClass('divisao_default');
	    $('#pg2').addClass('divisao2_full');
	    $('#fundo').removeClass('fundo');
	    $('#fundo').addClass('fundo2');
	    document.getElementById("carregando").style.left = "calc(50% - 125px)";

	    $('#descriSobre').removeClass('col-12');
	    $('#descriSobre').addClass('col-md-5 col-lg-5');
	    $('.depoi').removeClass('col-12');
	    $('.depoi').addClass('col-6');

	    $('#posicaoTela').val("divisao_default");
	    document.getElementById("posicaoTela").value = "divisao_default";
	    document.body.style.overflow = '';
	    $('#btnMenos').prop("disabled",false);
	    $('#btnMais').prop("disabled",false);

		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$.ajax({
			url : '/' + id + '&divisao=sobre',
			method : 'get',
			success: function(data){
			  $('#pg2').html(data);
			}
		})
		$('#local').val(id);
		setTimeout(function(){
		    $('.carregando').fadeIn(200);
		 },600);
		document.getElementById("caroucel").value = "port";
	}	
    //document.getElementById("Artigo" + id).submit();
}


//Tela do lado
var id = 1;
var imgs = new Array();
imgs[0] = "../img/Portifolio/1.jpg";
imgs[1] = "../img/Portifolio/2.jpg";
imgs[2] = "../img/Portifolio/3.jpg";
function troca(){
  $("#descriLateral" + (id+1)).fadeOut(500);
  if (id<imgs.length-1){
  id++; 
  }else{
    id=0
  }
  $("#fundo").fadeOut(500);

  setTimeout(function(){
    $('#fundo').css('background-image', 'url('+imgs[id]+')');
    $('#fundo').fadeIn(600);
    $("#descriLateral" + (id+1)).fadeIn(500);
  },600);
}
var segundos = 2; //Segundos entre cada imagem
setInterval("troca();",segundos*5000);


//carousel
$('#setaProx').mouseup(function(){
  $('#setaProx').prop("disabled",true);
  let id = parseInt($('#numeroImagem').val()) + 1;
  
  if(document.getElementById("caroucel").value != "port"){
    if(id > 12){
      id = 1;
    }
    $('#ImagemGrandona').attr("src", "img/Portifolio/mini/" + id  + ".jpg");
    $('#descriImagem').text($('#fotoPort' + id).attr("title"));
  }else{
    if(id > document.getElementById("maxFotos").value){
      id = 1;
    }
    $('#ImagemGrandona').attr("src", $('#Port' + id).attr("src"));
    $('#descriImagem').text($('#Port' + id).attr("title"));
  }
  $('#numeroImagem').attr('value', id);
  $('#setaProx').prop("disabled",false);
})

$('#setaAnt').mouseup(function(){
  $('#setaAnt').prop("disabled",true);
  let id = parseInt($('#numeroImagem').val()) - 1;
  
  if(document.getElementById("caroucel").value != "port"){
    if(id < 1){
      id = 12;
    }
    $('#ImagemGrandona').attr("src", "img/Portifolio/mini/" + id  + ".jpg");
    $('#descriImagem').text($('#fotoPort' + id).attr("title"));
  }else{
    if(id < 1){
      id = document.getElementById("maxFotos").value;
    }
    $('#ImagemGrandona').attr("src", $('#Port' + id).attr("src"));
    $('#descriImagem').text($('#Port' + id).attr("title"));
  }
  
  $('#numeroImagem').attr('value', id);
  $('#setaAnt').prop("disabled",false);
})


$('.xzinho').on('click', function(){
  $('.carroceulGigante').css("display", "none");
})