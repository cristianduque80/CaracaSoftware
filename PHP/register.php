<?php
    include('dbOn.php');
    include('functions.php');

    $stateUser = userExist($_POST['username']); //Si stateUser -> False (Usuario no existe)
                                                //Si stateUser -> True (Usuario existe)
    if($stateUser){
        echo "Exist";
    }else{
         $registerUsername = $_POST['username'];
        $registerPassword =$_POST['password'];
        $registerTypeUser =$_POST['typeUser'];
        
        $query="INSERT INTO $table (username,password) VALUES ('$registerUsername','$registerPassword')";
        
        $result = mysqli_query($connection,$query);
        
        if($result){
            echo "SEND";
        }
    }
   