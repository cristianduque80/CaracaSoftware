<?php

    //Consulta existencia del usuario
    function userExist ($username){
        include ('dbOn.php');

        $query = "SELECT * FROM $table WHERE username LIKE '$username' ";
        $result = mysqli_query($connection,$query);
        while(mysqli_fetch_array($result)){
            return true;
        }
        return false;
    }