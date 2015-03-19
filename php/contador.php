<?php


	require("negocios/connect_db.php");
	
	//IP DEL VISITANTE

	if( isset( $_SERVER['HTTP_X_FORWARDED_FOR'] )) $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if( isset( $_SERVER ['HTTP_VIA'] ))  $ip = $_SERVER['HTTP_VIA'];
    else if( isset( $_SERVER ['REMOTE_ADDR'] ))  $ip = $_SERVER['REMOTE_ADDR'];


/*Seleccionamos la ip, la diferencia en tiempo entre la fecha actual y la almacenada

* en la base de datos, con la función de mysql TIMEDIFF(fecha de inicio, fecha final)

*/
$c=1;

$sql=mysqli_query($link,"SELECT ip, TIMEDIFF(NOW(), fecha), fecha, num_visit FROM contador WHERE ip='$ip'");

//Ejecutamos la instrucción SQL


/*Almacenados el resultado de la instrucción SQL en un arreglo asociativo con la función

mysql_fetch_array */

$fila=mysqli_fetch_array($sql);

$tiempo=$fila[1]; //Diferencia entre fecha guardada y fecha actual

$num_visitas=$fila[3]; //Número de visitas

$horas_t=substr($tiempo,0,2); //Número de horas transcurridas
$horas_s=substr($tiempo,-5,-4);
$horas_t=$horas_t*3;
$sum_horas=$horas_t+$horas_s;

$tiemRes = 3; //Varible de tiempo en horas para restringir la visita

/*Contamos el número de registros obtenidos en la consulta anterior, si el numero

* obtenido es igual a cero es porque dicho visitante es nuevo en el sito

* entonces agregamos su ip a la base de datos junto con un 1 y la fecha actual */

if (mysqli_num_rows($sql)==0)

{
$c=1;
$sql1=mysqli_query($link,"INSERT INTO contador(ip, num_visit, fecha) VALUES('$ip','$c', NOW())");

}

/* Si el número de registros obtenidos es mayor a cero es porque dicho visitante ha vuelto a ingresar al

* sitio, y si su tiempo transcurrido es mayor a 5 horas desde la primera vez que ingreso

* entonces actualizamos su número de votos agregando sumando 1 al valor actual,

* tambien actualizamos la fecha de su ultimo ingreso a la fecha actual

* */

//Si la ip existe y han transcurrido 5hrs

else if (mysqli_num_rows($sql) > 0 && $sum_horas >= $tiemRes)

{

$sql2=mysqli_query($link,"UPDATE contador SET fecha=NOW(), num_visit='$num_visitas'+'$c' WHERE ip='$ip'");

}

$sql3=mysqli_query($link,"SELECT SUM(num_visit) FROM contador"); //Obtenemos la suma de todas las visitas


$fila1=mysqli_fetch_array($sql3); //Almacenanos el resultado de la consulta en un arreglo

$num_visitas=$fila1[0]; //Número de visitas


?>