<?php
include('connect_db.php');
session_start();

$i=0;
switch ($i) {
   case 0:
         $val1=$_POST['val1'];
         $val1=1;
         $i=$val1;
         break;
   case 1:
         $val2=$_POST['val2'];
         $val2=2;
         $i=$val2;
         break;
   case 2:
         $val3=$_POST['val3'];
         $val3=3;
         $i=$val3;
         break;
   case 3:
         $val4=$_POST['val4'];
         $val4=4;
         $i=$val4;
         break;
   case 4:
         $val5=$_POST['val5'];
         $val5=5;
         $i=$val5;
         break;
}


$valsent= mysqli_query($link, "SELECT valoracion, userval FROM estrellas WHERE id_negocio='$id_negocio'");
$fila=mysql_fetch_array($valsent);

if(mysqli_fetch_array($valsent)==0){
   $sql=mysqli_query($link, "INSERT INTO estrellas VALUES('','$i','$1','$id_negocio','$login_session3')");

}
else{
   $sql1= mysqli_query($link, "SELECT valoracion, userval FROM estrellas WHERE id_user='$login_session3'");
   if(mysqli_fetch_array($sql1)==0){
      $sql=mysqli_query($link, "INSERT INTO estrellas VALUES('','$i','$1','$id_negocio','$login_session3')");      
   }
   else{
      $sql=mysqli_query($link, "UPDATE estrellas SET valoracion='$i' WHERE id_negocio='$id_negocio' and id_user='$login_session3'");
   }
}
$valsent1= mysqli_query($link, "SELECT SUM(valoracion), SUM(userval) FROM estrellas WHERE id_negocio='$id_negocio'");
$fila1=mysqli_fetch_array($valsent1);
$vals=$fila[1];
$valort=$fila[0];
$valtotal=$valort/$vals;
$sql=mysqli_query($link, "UPDATE negocios SET valoracion='$valtotal' WHERE id_negocio='$id_negocio'"); 


?>
