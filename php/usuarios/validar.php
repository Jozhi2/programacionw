<?php session_start();
	
	include("connect_db.php");


	$username=$_POST['nick'];
	$pass=$_POST['pass1'];
	
		
	
	$sql2=mysqli_query($link, "SELECT * FROM login WHERE email='$username'");
	 if($f2=mysqli_fetch_array($sql2)){
		if($pass==$f2['pass']){

	
			$_SESSION['login_username']=$username;
		
			echo "<script>location.href='../../html/perfil.php'</script>";
				     
		}
		else{
			echo '<script>alert("CONTRASEÑA INCORRECTA")</script> ';
		
			echo "<script>location.href='../../html/index.php'</script>";
		}

	 }
	 else{
		
		echo '<script>alert("ESTE USUARIO NO EXISTE, PORFAVOR REGISTRESE PARA PODER INGRESAR")</script> ';
		
		echo "<script>location.href='../../html/index.php'</script>";	

	 }
	
	


	/*  $fetch=mysql_query("select id from login where email='$username' and pass='$pass'");
    $count=mysql_num_rows($fetch);
    if($count!="")
    {
    $_SESSION['login_username']=$username;
	header("Location:admin.php");	
    }
    else
    { 
       echo '<script>alert("CONTRASEÑA INCORRECTA")</script> ';
	   header('Location:index.php');
	}
	
    */
?>
