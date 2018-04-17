//Alterar foto com base na url
$("#fotoCapaText").on('keyup', function () {
    if($("#fotoCapaText").val() == ''){
        $('#imgAlbum').attr("src", "img/System/album_default.jpg");
    }else{
        $('#imgAlbum').attr("src", $("#fotoCapaText").val());
    }
});

//Alterar foto com base na url do inserir foto
$("#fotoAddText").on('keyup', function () {
    if($("#fotoAddText").val() == ''){
        $('#imgAddFoto').attr("src", "img/System/album_default.jpg");
    }else{
        $('#imgAddFoto').attr("src", $("#fotoAddText").val());
    }
});

//Altera imagem caregando
$("#selCar").change(function(){
   $('#imgCarregando').attr("src", $("#selCar").val());
})