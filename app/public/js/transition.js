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
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
		
		$('#local').val("sobre");	
		setTimeout(function(){
			$.ajax({
				url : 'Sobre?divisao=sobre',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
	}
});

$(".linkInicio").on('click', function(){
	if(document.getElementById("local").value != "inicio"){
		$('#fundoBranco').fadeIn(1000);
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
			
		$('#local').val("inicio");	
		setTimeout(function(){
			$.ajax({
				url : '/Inicio?divisao=inicio',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
		document.getElementById("caroucel").value = "index";
	}
});

$(".linkDepoi").on('click', function(){
	if(document.getElementById("local").value != "depoi"){
		$('#fundoBranco').fadeIn(1000);
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
		
		$('#local').val("depoi");
		setTimeout(function(){
			$.ajax({
				url : '/Depoimentos?divisao=depoi',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
	}		
});

$(".linkContato").on('click', function(){
	if(document.getElementById("local").value != "contato"){
		$('#fundoBranco').fadeIn(1000);
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
		
		$('#local').val("contato");
		setTimeout(function(){
			$.ajax({
				url : '/Contato?divisao=contato',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
	}		
});

$(".linkPerguntas").on('click', function(){
	if(document.getElementById("local").value != "perguntas"){
		$('#fundoBranco').fadeIn(1000);
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
		
		$('#local').val("perguntas");
		setTimeout(function(){
			$.ajax({
				url : '/Perguntas?divisao=perguntas',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
	}		
});

$(".linkAlbum").on('click', function(){
	if(document.getElementById("local").value != "album"){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$('.carregando').fadeIn(1000);
		
		$('#local').val("album");
		setTimeout(function(){
		   $.ajax({
				url : '/Album?divisao=album',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			}) 
		 },1000);
	}		
});

function abrirTipoAlbum(id){
  if(document.getElementById("local").value != id){
		$('#fundoBranco').fadeIn(1000);
		$('#branco').val("true");
		$('.carregando').fadeIn(1000);
		
		$('#local').val(id);
		setTimeout(function(){
		    $.ajax({
				url : '/' + id + '&divisao=sobre',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },1000);
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
		$('.carregando').fadeIn(1000);
		$('#branco').val("true");
		
		$('#local').val(id);
		setTimeout(function(){
		    $.ajax({
				url : '/' + id + '&divisao=sobre',
				method : 'get',
				success: function(data){
				  $('#pg2').html(data);
				}
			})
		 },600);
		document.getElementById("caroucel").value = "port";
	}	
    //document.getElementById("Artigo" + id).submit();
}


//Tela do lado
var id = 1;
var imgs = new Array();
imgs[0] = document.getElementById('imgLateral1').src;
imgs[1] = document.getElementById('imgLateral2').src;
imgs[2] = document.getElementById('imgLateral3').src;
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