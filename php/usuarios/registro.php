<?php session_start();

	$realname=$_POST['realname'];
	$apellido=$_POST['apellido'];
	$mail=$_POST['mail'];
	$pass= $_POST['pass'];
	$rpass=$_POST['rpass'];
	$rmail=$_POST['nick2'];

	require("connect_db.php");
	$checkemail=mysqli_query($link, "SELECT * FROM login WHERE email='$mail'");
	$check_mail=mysqli_num_rows($checkemail);
		if($pass==$rpass){
			if($check_mail>0){
				echo ' <script language="javascript">alert("Atencion, ya existe el mail designado para un usuario, verifique sus datos");</script> ';
				echo "<script>location.href='../../html/index.php'</script>";	
			}
			else{
			  	if($mail!=$rmail){
		            echo ' <script language="javascript">alert("Atencion, el mail no coinside, verifique sus datos");</script> ';
	           		echo "<script>location.href='../../html/index.php'</script>";	
	            }
			    else{
				
				     //require("connect_db.php");
				      mysqli_query($link,"INSERT INTO login VALUES('','$realname','$apellido','$mail','$pass','')");
				     //echo 'Se ha registrado con exito';
				     
				      mysqli_close($link);
					 
								
	
								$_SESSION['login_username']=$mail;
		
								echo "<script>location.href='../../html/perfil.php'</script>";			

						
				}
			
			}
		}
		else{
			echo ' <script language="javascript">alert("Contraseñas Incorrectas");</script> ';
			echo "<script>location.href='../../html/index.php'</script>";	
		}

  
?>