$(document).on('ready',function(){
	cargado();
});

$(window).resize(function(){
	$anchoInicial = window.innerWidth;
	$escala = $anchoInicial / 1440;
	$catorcePixeles = $escala * 14;
	$quincePixeles = $escala * 15;
	$diecisietePixeles = $escala * 17;
	$veintiunPixeles = $escala * 21;
	$veinticincoPixeles = $escala * 25;
	$treintaYDosPixeles = $escala * 32;

	$('.catorcePixeles').css('font-size', $catorcePixeles + "px");
	$('.quincePixeles').css('font-size', $quincePixeles + "px");
	$('.diecisietePixeles').css('font-size', $diecisietePixeles + "px");
	$('.veintiunPixeles').css('font-size', $veintiunPixeles + "px");
	$('.veinticincoPixeles').css('font-size', $veinticincoPixeles + "px");
	$('.treintaYDosPixeles').css('font-size', $treintaYDosPixeles + "px");
});

function cargado(){
	$anchoInicial = window.innerWidth;
	$escala = $anchoInicial / 1440;
	$catorcePixeles = $escala * 14;
	$quincePixeles = $escala * 15;
	$diecisietePixeles = $escala * 17;
	$veintiunPixeles = $escala * 21;
	$veinticincoPixeles = $escala * 25;
	$treintaYDosPixeles = $escala * 32;

	$('.catorcePixeles').css('font-size', $catorcePixeles + "px");
	$('.quincePixeles').css('font-size', $quincePixeles + "px");
	$('.diecisietePixeles').css('font-size', $diecisietePixeles + "px");
	$('.veintiunPixeles').css('font-size', $veintiunPixeles + "px");
	$('.veinticincoPixeles').css('font-size', $veinticincoPixeles + "px");
	$('.treintaYDosPixeles').css('font-size', $treintaYDosPixeles + "px");
}

