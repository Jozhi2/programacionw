<?php
include('connect_db.php');
session_start();

	$check=$_SESSION['login_username'];
	$session=mysql_query("SELECT * FROM login WHERE email='$check' ");
	$row=mysql_fetch_array($session);
	$login_session=$row['realname'];
	$login_session4=$row['apellido'];
	$login_session2=$row['email'];
	$login_session3=$row['id_usuario'];
	
	$file = $DOCUMENT_ROOT. "admin.html";
	$doc = new DOMDocument;
	$doc->loadHTMLFile("admin.html");

	$nombre=$doc->getElementById("name");
	$copyright_text_1 = $doc->createTextNode("Copyright ");
	$nombre.appendChild($copyright_text_1);
	echo $nombre;
	echo $doc->saveHTML();



 /*
 function datos_negocio($link,$_SESSION['login_username']){
	$session2=mysql_query("SELECT * FROM login INNER JOIN negocios ON login.id_usuario = negocios.id_usuario WHERE login.email='$check' ");
	$row2=mysql_fetch_array($session2);	 
 }
 function no_paga($link){
	 
	$session3=mysql_query("SELECT * FROM negocios WHERE pagando='0' ");
	$row3=mysql_fetch_array($session3);
	do {
		$c=$c+1;
		$bss_session[$c]=$row3['namebss'] ;
	} while($row3=mysql_fetch_array($session3));
 }
 function mostrar_imagen($link,$_SESSION['login_username']){
	 $consulta=mysql_query("SELECT imagen FROM login INNER JOIN imagenes ON login.id_usuario = imagenes.id_user WHERE login.email='$check' ");
	$datos = mysql_fetch_assoc($consulta);
	$ruta = "imagenes/" . $datos['imagen'];
 }

*/
?>