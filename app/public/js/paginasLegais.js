

$('#btnMais').on('click', function () {
  $('#btnMais').prop("disabled",true);
  if ($('#pg1').hasClass('divisao')) {
    $('#pg1').removeClass('divisao');
    $('#pg2').removeClass('divisao2');
    $('#pg1').addClass('divisao_full');
    $('#pg2').addClass('divisao2_default');
    $('#fundo').removeClass('fundo');
    $('#fundo').addClass('fundo3');
    $('#posicaoTela').val("divisao");
    document.getElementById("posicaoTela").value = "divisao_full";
    $('.depoi').removeClass('col-md-6');
    $('.depoi').addClass('col-md-12');
    
    $('#descriSobre').removeClass('col-md-5 col-lg-5');
    $('#descriSobre').addClass('col-12');

    document.body.style.overflow = 'hidden';
    $('#btnMenos').prop("disabled",false);
    $('#btnMais').prop("disabled",false);
    return;
  }

  if ($('#pg1').hasClass('divisao_default')) {
    $('#pg1').removeClass('divisao_default');
    $('#pg2').removeClass('divisao2_full');
    $('#pg1').addClass('divisao');
    $('#pg2').addClass('divisao2');
    $('#fundo').removeClass('fundo2');
    $('#fundo').addClass('fundo');
    $('#posicaoTela').val("divisao_default");
    document.getElementById("posicaoTela").value = "divisao";
    document.getElementById("carregando").style.left = "calc(70% - 125px)";

    $('.depoi').removeClass('col-md-6');
    $('.depoi').addClass('col-md-12');
    
    $('#descriSobre').removeClass('col-md-5 col-lg-5');
    $('#descriSobre').addClass('col-12');

    document.body.style.overflow = '';
    $('#btnMenos').prop("disabled",false);
    $('#btnMais').prop("disabled",false);
    return;
  }
});




function mostrarImagem(nome, url, id){
    document.getElementById("carroucelGiant").style.display = "block";
    document.getElementById("ImagemGrandona").src = url;
    document.getElementById("descriImagem").innerHTML= nome;
    document.getElementById("numeroImagem").value = id;
}



$(document).ready(function(){
  if($('#branco').val() == "true"){
    $('html, body').scrollTop(0);
    $('#fundoBranco').fadeOut(1000);
    $('.carregando').fadeOut(500);
    $('#branco').val("false");
  }
})

//Alterar foto com base na url
$("#urlFoto").on('keyup', function () {
    if($("#urlFoto").val() == ''){
        $('#imgFoto').attr("src", "img/System/semFoto.svg");
    }else{
        $('#imgFoto').attr("src", $("#urlFoto").val());
    }
});

function mostrarResposta(id){
    if(document.getElementById('resposta'+id).style.display == "block"){
        document.getElementById('resposta'+id).style.display = "none";
        document.getElementById('btnergunta' + id).innerHTML = "+";
    }else{
        document.getElementById('resposta'+id).style.display = "block";
        document.getElementById('btnergunta' + id).innerHTML = "-";
    }
    
}

function hoverArtigo(id){
  $("#" +id + "ver").css('opacity', '1');
  $("#" +id + " .imgArtigo").css('filter', 'grayscale(100%)');
}

function leavArtigo(id){
  $("#" +id + "ver").css('opacity', '0');
  $("#" +id + " .imgArtigo").css('filter', 'grayscale(0%)');
}

