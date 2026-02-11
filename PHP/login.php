<?php
    include ("dbOn.php");
    include ("functions.php");

    //
    //CONTROL DE ERRORES:
    //USARIO NO EXISTE    --> userDontExist
    //ERROR DE CONTRASEÑA --> wrongPass
    //

    //Si userExist -> False (Usuario no existe)
    //Si userExist -> True (Usuario existe)
    if(userExist($_POST['username'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $query = "SELECT * FROM $table WHERE username = '$username' ";
        $result = mysqli_query($connection,$query);
        while($row = mysqli_fetch_array($result)){
            $compHash = password_verify($password,$row['password']);
            if($compHash){
                session_start();
                ob_start();
                $_SESSION['name'] = $row['name'];
                $_SESSION['lastName'] = $row['lastname'];
                $correctPass = true;//Contraseña correcta
            }else{
                $correctPass = false;//Contraseña incorrecta
            }
        }
        
  
        if($correctPass){

            echo true;
        }else{
            echo "Wrong pass";
        }  
    }else{
        echo "User Dont Exist";
    }
    
    

   