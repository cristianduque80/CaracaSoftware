<?php
    include('dbOn.php');
    include('functions.php');

    $stateUser = userExist($_POST['username']);   //stateUser -> false Username no existe -> registrar
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