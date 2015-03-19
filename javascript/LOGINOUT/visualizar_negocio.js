function visualizarNegocio(){
	var encabezado = document.getElementById('encabezado');

	var cubrePantallaVisualizarNegocio = document.createElement('div');
	cubrePantallaVisualizarNegocio.setAttribute('id', 'cubrePantallaVisualizarNegocio');
	document.body.insertBefore(cubrePantallaVisualizarNegocio, encabezado); 

	var cajaCentradaVisualizarNegocio = document.createElement('div');
	cajaCentradaVisualizarNegocio.setAttribute('id', 'cajaCentradaVisualizarNegocio');
	cajaCentradaVisualizarNegocio.setAttribute('class', 'quincePixeles');
	document.body.insertBefore(cajaCentradaVisualizarNegocio, encabezado); 

	var negocioParteIzquierda = document.createElement('div');
	negocioParteIzquierda.setAttribute('id', 'negocioParteIzquierda');
	negocioParteIzquierda.setAttribute('class', 'quincePixeles');
	cajaCentradaVisualizarNegocio.appendChild(negocioParteIzquierda); 

	var negocioParteDerecha = document.createElement('figure');
	negocioParteDerecha.setAttribute('id', 'negocioParteDerecha');
	negocioParteDerecha.setAttribute('class', 'quincePixeles');
	cajaCentradaVisualizarNegocio.appendChild(negocioParteDerecha); 

	var nombreNegocio = document.createElement('p');
	nombreNegocio.setAttribute('id', 'nombreNegocio');
	nombreNegocio.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(nombreNegocio); 

	var calificacion = document.createElement('figure');
	calificacion.setAttribute('id', 'calificacionFigure');
	calificacion.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(calificacion); 

	var estrellas = document.createElement('img');
	estrellas.setAttribute('id', 'estrellas');
	estrellas.setAttribute('class', 'quincePixeles');
	calificacion.appendChild(estrellas); 

	var estrellas = document.createElement('img');
	estrellas.setAttribute('id', 'estrellas');
	estrellas.setAttribute('class', 'quincePixeles');
	calificacion.appendChild(estrellas); 

	var direccion = document.createElement('p');
	direccion.setAttribute('id', 'direccion');
	direccion.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(direccion); 

	var ciudadPais = document.createElement('p');
	ciudadPais.setAttribute('id', 'ciudadPais');
	ciudadPais.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(ciudadPais); 

	var sitioWeb = document.createElement('p');
	sitioWeb.setAttribute('id', 'sitioWeb');
	sitioWeb.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(sitioWeb); 

	var correo = document.createElement('p');
	correo.setAttribute('id', 'correo');
	correo.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(correo); 

	var telefono = document.createElement('p');
	telefono.setAttribute('id', 'telefono');
	telefono.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(telefono); 

	var descripcion = document.createElement('p');
	descripcion.setAttribute('id', 'descripcion');
	descripcion.setAttribute('class', 'quincePixeles');
	negocioParteIzquierda.appendChild(descripcion); 

	var flechaIzquierda = document.createElement('figure');
	flechaIzquierda.setAttribute('id', 'flechaIzquierda');
	flechaIzquierda.setAttribute('class', 'quincePixeles');
	var imagenFlechaIzquierda = document.createElement('img');
	imagenFlechaIzquierda.setAttribute('src','../objetos/flechas/flechaIzquierda.png');
	flechaIzquierda.appendChild(imagenFlechaIzquierda);
	document.body.insertBefore(flechaIzquierda, cajaCentradaVisualizarNegocio); 

	var flechaDerecha = document.createElement('figure');
	flechaDerecha.setAttribute('id', 'flechaDerecha');
	flechaDerecha.setAttribute('class', 'quincePixeles');
	var imagenFlechaDerecha = document.createElement('img');
	imagenFlechaDerecha.setAttribute('src','../objetos/flechas/flechaDerecha.png');
	flechaDerecha.appendChild(imagenFlechaDerecha);
	document.body.insertBefore(flechaDerecha, cajaCentradaVisualizarNegocio); 

	$('#flechaIzquierda').mouseover(function(){
		imagenFlechaIzquierda.setAttribute('src','../objetos/flechas/flechaIzquierdaHover.png');
		document.body.style.cursor = 'pointer';
	});

	$('#flechaIzquierda').mouseout(function(){
		imagenFlechaIzquierda.setAttribute('src','../objetos/flechas/flechaIzquierda.png');
		document.body.style.cursor = 'auto';
	});

	$('#flechaDerecha').mouseover(function(){
		imagenFlechaDerecha.setAttribute('src','../objetos/flechas/flechaDerechaHover.png');
		document.body.style.cursor = 'pointer';
	});

	$('#flechaDerecha').mouseout(function(){
		imagenFlechaDerecha.setAttribute('src','../objetos/flechas/flechaDerecha.png');
		document.body.style.cursor = 'auto';
	});

	cargado();
}

function salirVisualizarNegocio(){
	document.body.removeChild(cubrePantallaVisualizarNegocio);
	document.body.removeChild(cajaCentradaVisualizarNegocio);
	document.body.removeChild(flechaIzquierda);
	document.body.removeChild(flechaDerecha);
}