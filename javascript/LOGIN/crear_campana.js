function crearCampana(){

	var encabezado = document.getElementById('encabezado');

	var cubrePantalla = document.createElement('div');
	cubrePantalla.setAttribute('id', 'cubrePantallaPromocionarNegocio');

	var cajaCentrada = document.createElement('div');
	cajaCentrada.setAttribute('id', 'pantallaCentradaCrearCampana');
	cajaCentrada.setAttribute('class', 'quincePixeles');

	var titulo = document.createElement('p');
	var textoTitulo =  document.createTextNode('DATE A CONOCER EN CINCO'); 
	titulo.setAttribute('class', 'tituloCrearCampana treintaYDosPixeles');
	titulo.appendChild(textoTitulo);
	cajaCentrada.appendChild(titulo); 

	var tituloDos = document.createElement('p');
	var textoTituloDos =  document.createTextNode('PASOS SENCILLOS'); 
	tituloDos.setAttribute('class', 'tituloCrearCampana treintaYDosPixeles');
	tituloDos.appendChild(textoTituloDos);
	cajaCentrada.appendChild(tituloDos); 

	var divInferior = document.createElement('div');
	divInferior.setAttribute('id', 'cajaCrearCampana');
	var tituloTres = document.createElement('p');
	var textoTituloTres =  document.createTextNode('CREA TU CAMPAÑA'); 
	tituloTres.setAttribute('id', 'textoCrearCampana');
	tituloTres.setAttribute('class', 'veinticincoPixeles');
	tituloTres.appendChild(textoTituloTres);
	divInferior.appendChild(tituloTres);
	cajaCentrada.appendChild(divInferior);

	document.body.insertBefore(cubrePantalla, encabezado); 
	document.body.insertBefore(cajaCentrada, encabezado); 

	cargado();
}

function crearCampanaSeleccionarNegocio(){
	var cubrePantallaAnterior = document.getElementById('cubrePantallaPromocionarNegocio');
	document.body.removeChild(cubrePantallaAnterior); 
	var pantallaCentrada = document.getElementById('pantallaCentradaCrearCampana');
	document.body.removeChild(pantallaCentrada); 

	var encabezado = document.getElementById('encabezado');

	var cubrePantalla = document.createElement('div');
	cubrePantalla.setAttribute('id', 'cubrePantallaSeleccionarNegocio');

	var cajaCentrada = document.createElement('div');
	cajaCentrada.setAttribute('id', 'seleccionarNegocio');
	cajaCentrada.setAttribute('class', 'quincePixeles');

	var cajaFondoAzul = document.createElement('div');
	cajaFondoAzul.setAttribute('id', 'cajaFondoAzul');
	cajaFondoAzul.setAttribute('class', 'quincePixeles');

	var titulo = document.createElement('p');
	var textoTitulo =  document.createTextNode('SELECCIONA TU NEGOCIO'); 
	titulo.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	titulo.appendChild(textoTitulo);
	cajaFondoAzul.appendChild(titulo); 

	cajaCentrada.appendChild(cajaFondoAzul);

	var negocios = document.createElement('p');
	var textoNegocios =  document.createTextNode('Wallavi'); 
	negocios.setAttribute('class', 'seleccionarNegocio veinticincoPixeles');
	negocios.appendChild(textoNegocios);
	cajaCentrada.appendChild(negocios); 

	document.body.insertBefore(cubrePantalla, encabezado); 
	document.body.insertBefore(cajaCentrada, encabezado); 

}

function crearCampanaDuracion(){
	var cubrePantallaAnterior = document.getElementById('cubrePantallaSeleccionarNegocio');
	document.body.removeChild(cubrePantallaAnterior); 
	var pantallaCentrada = document.getElementById('seleccionarNegocio');
	document.body.removeChild(pantallaCentrada); 

	var encabezado = document.getElementById('encabezado');

	var cubrePantalla = document.createElement('div');
	cubrePantalla.setAttribute('id', 'cubrePantallaDuracion');

	var cajaCentrada = document.createElement('div');
	cajaCentrada.setAttribute('id', 'duracionCampana');
	cajaCentrada.setAttribute('class', 'quincePixeles');

	var cajaFondoAzul = document.createElement('div');
	cajaFondoAzul.setAttribute('id', 'cajaFondoAzul');
	cajaFondoAzul.setAttribute('class', 'quincePixeles');

	var titulo = document.createElement('p');
	var textoTitulo =  document.createTextNode('DETERMINA LA DURACIÓN DE TU CAMPAÑA'); 
	titulo.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	titulo.appendChild(textoTitulo);
	cajaFondoAzul.appendChild(titulo); 

	cajaCentrada.appendChild(cajaFondoAzul);

	var inicio = document.createElement('p');
	var textoInicio =  document.createTextNode('INICIO'); 
	inicio.setAttribute('id', 'inicioDuracion');
	inicio.setAttribute('class', 'veinticincoPixeles');
	inicio.appendChild(textoInicio);
	cajaCentrada.appendChild(inicio); 

	var finalizacion = document.createElement('p');
	var textoFinalizacion =  document.createTextNode('FINALIZACIÓN'); 
	finalizacion.setAttribute('id', 'finalDuracion');
	finalizacion.setAttribute('class', 'veinticincoPixeles');
	finalizacion.appendChild(textoFinalizacion);
	cajaCentrada.appendChild(finalizacion); 

	var diaInicio = document.createElement('input');
	diaInicio.setAttribute('id', 'diaInicioInput');
	diaInicio.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	diaInicio.setAttribute('placeholder', '15');
	cajaCentrada.appendChild(diaInicio); 

	var mesInicio = document.createElement('input');
	mesInicio.setAttribute('id', 'mesInicioInput');
	mesInicio.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	mesInicio.setAttribute('placeholder', '02');
	cajaCentrada.appendChild(mesInicio); 

	var anoInicio = document.createElement('input');
	anoInicio.setAttribute('id', 'anoInicioInput');
	anoInicio.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	anoInicio.setAttribute('placeholder', '2015');
	cajaCentrada.appendChild(anoInicio); 

	var diaFinal = document.createElement('input');
	diaFinal.setAttribute('id', 'diaFinalInput');
	diaFinal.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	diaFinal.setAttribute('placeholder', '15');
	cajaCentrada.appendChild(diaFinal); 

	var mesFinal = document.createElement('input');
	mesFinal.setAttribute('id', 'mesFinalInput');
	mesFinal.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	mesFinal.setAttribute('placeholder', '03');
	cajaCentrada.appendChild(mesFinal); 

	var anoFinal = document.createElement('input');
	anoFinal.setAttribute('id', 'anoFinalInput');
	anoFinal.setAttribute('class', 'inputFormularioDuracion veintiunPixeles');
	anoFinal.setAttribute('placeholder', '2015');
	cajaCentrada.appendChild(anoFinal); 

	var anterior = document.createElement('div');
	anterior.setAttribute('id', 'anteriorDuracion');
	anterior.setAttribute('class', 'quincePixeles');

	var anteriorDuracion = document.createElement('p');
	var textoAnterior =  document.createTextNode('ANTERIOR'); 
	anteriorDuracion.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	anteriorDuracion.appendChild(textoAnterior);
	anterior.appendChild(anteriorDuracion); 

	cajaCentrada.appendChild(anterior);

	var siguiente = document.createElement('div');
	siguiente.setAttribute('id', 'siguienteDuracion');
	siguiente.setAttribute('class', 'quincePixeles');	

	var siguienteDuracion = document.createElement('p');
	var textoSiguiente =  document.createTextNode('SIGUIENTE'); 
	siguienteDuracion.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	siguienteDuracion.appendChild(textoSiguiente);
	siguiente.appendChild(siguienteDuracion); 

	cajaCentrada.appendChild(siguiente);

	document.body.insertBefore(cubrePantalla, encabezado); 
	document.body.insertBefore(cajaCentrada, encabezado); 
}

function crearCampanaCostos(){
	var cubrePantallaAnterior = document.getElementById('cubrePantallaDuracion');
	document.body.removeChild(cubrePantallaAnterior); 
	var pantallaCentrada = document.getElementById('duracionCampana');
	document.body.removeChild(pantallaCentrada); 

	var encabezado = document.getElementById('encabezado');

	var cubrePantalla = document.createElement('div');
	cubrePantalla.setAttribute('id', 'cubrePantallaCostos');

	var cajaCentrada = document.createElement('div');
	cajaCentrada.setAttribute('id', 'costosCampana');
	cajaCentrada.setAttribute('class', 'quincePixeles');

	var cajaFondoAzul = document.createElement('div');
	cajaFondoAzul.setAttribute('id', 'cajaFondoAzul');
	cajaFondoAzul.setAttribute('class', 'quincePixeles');

	var titulo = document.createElement('p');
	var textoTitulo =  document.createTextNode('DETERMINA EL SALDO DE INVERSIÓN'); 
	titulo.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	titulo.appendChild(textoTitulo);
	cajaFondoAzul.appendChild(titulo); 

	cajaCentrada.appendChild(cajaFondoAzul);

	var anterior = document.createElement('div');
	anterior.setAttribute('id', 'anteriorCostos');
	anterior.setAttribute('class', 'quincePixeles');

	var anteriorDuracion = document.createElement('p');
	var textoAnterior =  document.createTextNode('ANTERIOR'); 
	anteriorDuracion.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	anteriorDuracion.appendChild(textoAnterior);
	anterior.appendChild(anteriorDuracion); 

	cajaCentrada.appendChild(anterior);

	var siguiente = document.createElement('div');
	siguiente.setAttribute('id', 'siguienteCostos');
	siguiente.setAttribute('class', 'quincePixeles');	

	var siguienteDuracion = document.createElement('p');
	var textoSiguiente =  document.createTextNode('SIGUIENTE'); 
	siguienteDuracion.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	siguienteDuracion.appendChild(textoSiguiente);
	siguiente.appendChild(siguienteDuracion); 

	var inputCosto = document.createElement('input');
	inputCosto.setAttribute('id', 'inputFormularioCostos');
	inputCosto.setAttribute('class', 'veintiunPixeles');
	inputCosto.setAttribute('placeholder', '$99');
	cajaCentrada.appendChild(inputCosto); 

	cajaCentrada.appendChild(siguiente);

	document.body.insertBefore(cubrePantalla, encabezado); 
	document.body.insertBefore(cajaCentrada, encabezado); 

}

function crearCampanaFoto(){
	var cubrePantallaAnterior = document.getElementById('cubrePantallaCostos');
	document.body.removeChild(cubrePantallaAnterior); 
	var pantallaCentrada = document.getElementById('costosCampana');
	document.body.removeChild(pantallaCentrada); 

	var encabezado = document.getElementById('encabezado');

	var cubrePantalla = document.createElement('div');
	cubrePantalla.setAttribute('id', 'cubrePantallaFoto');

	var cajaCentrada = document.createElement('div');
	cajaCentrada.setAttribute('id', 'fotoCampana');
	cajaCentrada.setAttribute('class', 'quincePixeles');

	var cajaFondoAzul = document.createElement('div');
	cajaFondoAzul.setAttribute('id', 'cajaFondoAzul');
	cajaFondoAzul.setAttribute('class', 'quincePixeles');

	var titulo = document.createElement('p');
	var textoTitulo =  document.createTextNode('SUBE TU FOTO DE CAMPAÑA'); 
	titulo.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');
	titulo.appendChild(textoTitulo);
	cajaFondoAzul.appendChild(titulo); 

	cajaCentrada.appendChild(cajaFondoAzul);

	var figureFotoCampana = document.createElement('figure');
	figureFotoCampana.setAttribute('id', 'figureFotoCampana');
	figureFotoCampana.setAttribute('class', 'quincePixeles');
	var imagenFotoCampana = document.createElement('img');
	imagenFotoCampana.setAttribute('src', '../objetos/subirImagenes/subirFotoCampana.png');
	figureFotoCampana.appendChild(imagenFotoCampana);

	cajaCentrada.appendChild(figureFotoCampana);


	var crearCampana = document.createElement('p');
	crearCampana.setAttribute('id', 'crearCampana');
	crearCampana.setAttribute('class', 'tituloPasosCrearCampana veinticincoPixeles');	

	var textoFinalizar = document.createTextNode('FINALIZAR'); 
	crearCampana.appendChild(textoFinalizar);

	cajaCentrada.appendChild(crearCampana); 

	document.body.insertBefore(cubrePantalla, encabezado); 
	document.body.insertBefore(cajaCentrada, encabezado); 
}


function salirCrearCampana(){
	var cubrePantalla = document.getElementById('cubrePantallaPromocionarNegocio');
	var pantallaCentrada = document.getElementById('pantallaCentradaCrearCampana');

	document.body.removeChild(cubrePantalla); 
	document.body.removeChild(pantallaCentrada); 
}

function salirCrearCampanaSeleccionarNegocio(){
	var cubrePantalla = document.getElementById('cubrePantallaSeleccionarNegocio');
	var seleccionarNegocio = document.getElementById('seleccionarNegocio');

	document.body.removeChild(cubrePantalla); 
	document.body.removeChild(seleccionarNegocio); 
}

function salirCrearCampanaDuracion(){
	var cubrePantalla = document.getElementById('cubrePantallaDuracion');
	var duracionCampana = document.getElementById('duracionCampana');

	document.body.removeChild(cubrePantalla); 
	document.body.removeChild(duracionCampana); 
}

function salirCrearCampanaCostos(){
	var cubrePantalla = document.getElementById('cubrePantallaCostos');
	var costosCampana = document.getElementById('costosCampana');

	document.body.removeChild(cubrePantalla); 
	document.body.removeChild(costosCampana); 
}

function salirCrearCampanaFoto(){
	var cubrePantalla = document.getElementById('cubrePantallaFoto');
	var fotoCampana = document.getElementById('fotoCampana');

	document.body.removeChild(cubrePantalla); 
	document.body.removeChild(fotoCampana); 
}