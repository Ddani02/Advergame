$(document).ready(function(){
  $("#salto1").click(function(){
    $("#juego").animate({left: '-1280px'});
  });
	 $("#salto2").click(function(){
    $("#juego").animate({left: '-2560px'});
  });
	 $("#reiniciar").click(function(){
    $("#juego").animate({left: '0px'});
  });
});