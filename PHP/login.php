<?php
    include ("dbOn.php");
    $table =  $_POST['typeUser'];
    
    //
    //CONTROL DE ERRORES:
    //USARIO NO EXISTE    --> false
    //ERROR DE CONTRASEÑA --> false
    //
    
    session_start();
    ob_start();

    if(userExist($connection,$_POST['username'],$table)){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM $table WHERE username = '$username' ";
        $result = mysqli_query($connection,$query);
        $correctPass = false;
        while($row = mysqli_fetch_array($result)){

            $compHash = password_verify($password,$row['password']);
            if($compHash){
                $_SESSION['name'] = $row['name'];
                $_SESSION['lastName'] = $row['lastname'];
                $_SESSION['user_id']=$row['id'];
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
    
//Consulta existencia del usuario
function userExist ($connection,$username,$table){
    $query = "SELECT * FROM $table WHERE username LIKE '$username' ";
    $result = mysqli_query($connection,$query);
    while(mysqli_fetch_array($result)){
        return true;
    }
    return false;
}    

   