<?php
    include('dbOn.php');;
    $table =  $_POST['typeUser'];

    session_start();
    ob_start();
    
    

    $stateUser = userExist($connection,$_POST['username'],$table);   //stateUser -> false Username no existe -> registrar
                                                            //stateUser -> true  Username Existente -> no registrar
    if($stateUser){
        echo "Exist";
    }else{
        $registerUsername = $_POST['username'];
        $registerPassword = password_hash($_POST['password'],PASSWORD_DEFAULT);//Guardar contraseña encriptada en la db
        $registerTypeUser =$_POST['typeUser'];
        $registerName =$_POST['name'] ;
        $registerLastname =$_POST['lastName'];

        $query="INSERT INTO $table (username,password,name,lastname) VALUES ('$registerUsername','$registerPassword','$registerName','$registerLastname')";
        
        $result = mysqli_query($connection,$query);
        
        if($result){
            echo "SEND";
        }
    }
   include('dbOff.php');

//Consulta existencia del usuario
function userExist ($connection,$username,$table){
    $query = "SELECT * FROM $table WHERE username LIKE '$username' ";
    $result = mysqli_query($connection,$query);
    while(mysqli_fetch_array($result)){
        return true;
    }
    return false;
} 