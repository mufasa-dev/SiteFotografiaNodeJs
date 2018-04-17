
  /*  $('#btnMenos').on('click', function () {
      if ($('#posicaoTela').val() === 'divisao') {
        $('#pg1').removeClass('divisao');
        $('#pg2').removeClass('divisao2');
        $('#pg1').addClass('divisao_default');
        $('#pg2').addClass('divisao2_full');
        
        $('.depoi').removeClass('col-12');
        $('.depoi').addClass('col-6');

        $('#descriSobre').removeClass('col-12');
        $('#descriSobre').addClass('col-md-5 col-lg-5');

        $('#posicaoTela').val("divisao_default");
        document.getElementById("posicaoTela").value = "divisao_default";
        document.getElementById("carregando").style.left = "calc(50% - 125px)";

        document.body.style.overflow = '';
        return;
      }

      if ($('#posicaoTela').val() == 'divisao_full') {
        $('#pg1').removeClass('divisao_full');
        $('#pg2').removeClass('divisao2_default');
        $('#pg1').addClass('divisao');
        $('#pg2').addClass('divisao2');
        $('#posicaoTela').val("divisao");
        document.getElementById("posicaoTela").value = "divisao";
        $('.depoi').removeClass('col-6');
        $('.depoi').addClass('col-12');
        
        $('#descriSobre').removeClass('col-md-5 col-lg-5');
        $('#descriSobre').addClass('col-12');
        
        document.body.style.overflow = '';
        return;
      }
    });

    $('#btnMais').on('click', function () {
      if ($('#pg1').hasClass('divisao')) {
        $('#pg1').removeClass('divisao');
        $('#pg2').removeClass('divisao2');
        $('#pg1').addClass('divisao_full');
        $('#pg2').addClass('divisao2_default');
        $('#posicaoTela').val("divisao_full");
        document.getElementById("posicaoTela").value = "divisao_full";

        $('.depoi').removeClass('col-12');
        $('.depoi').addClass('col-6');

        $('#descriSobre').removeClass('col-12');
        $('#descriSobre').addClass('col-md-5 col-lg-5');
        document.body.style.overflow = 'hidden';
        return;
      }

      if ($('#pg1').hasClass('divisao_default')) {
        $('#pg1').removeClass('divisao_default');
        $('#pg2').removeClass('divisao2_full');
        $('#pg1').addClass('divisao');
        $('#pg2').addClass('divisao2');
        $('#posicaoTela').val("divisao");
        document.getElementById("posicaoTela").value = "divisao";

        $('.depoi').removeClass('col-6');
        $('.depoi').addClass('col-12');

        $('#descriSobre').removeClass('col-md-5 col-lg-5');
        $('#descriSobre').addClass('col-12');
        document.getElementById("carregando").style.left = "calc(70% - 125px)";

        document.body.style.overflow = '';
        return;
      }

    });

    //Alterar foto com base na url
    $("#urlFoto").on('keyup', function () {
        if($("#urlFoto").val() == ''){
            $('#imgFoto').attr("src", "img/System/semFoto.svg");
        }else{
            $('#imgFoto').attr("src", $("#urlFoto").val());
        }
        
    });

    $(document).ready(function(){
      if($('#branco').val() == "true"){
        $('html, body').scrollTop(0);
        $('#fundoBranco').fadeOut(1000);
        $('.carregando').fadeOut(500);
        $('#branco').val("false");
      }
    })

    function mostrarResposta(id){
        if(document.getElementById('resposta'+id).style.display == "block"){
            document.getElementById('resposta'+id).style.display = "none";
        }else{
            document.getElementById('resposta'+id).style.display = "block";
        }
        
    }*/