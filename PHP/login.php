<?php
    include ("dbOn.php");
    include ("functions.php");

    //
    //CONTROL DE ERRORES:
    //USARIO NO EXISTE    --> userDontExist
    //ERROR DE CONTRASEÑA --> wrongPass
    //

    //Si stateUser -> False (Usuario no existe)
    //Si stateUser -> True (Usuario existe)
    if(userExist($_POST['username'])){
        $username = $_POST['username'];
        $password = $_POST['password'];
        $correctPass = false;//Si correctPass -> fasle (Contraseña incorrecta)
        $query = "SELECT * FROM $table WHERE password = '$password' AND username = '$username' ";
        $result = mysqli_query($connection,$query);
        while($row=mysqli_fetch_array($result)){
            session_start();//Iniciar sesion
            ob_start();//Iniciar el almacenamiento en el buffer de salida
            $_SESSION['username'] = $row['username']; //Iniciar sesion y guardar el nombre de usuario en la variable de sesion
           
            $correctPass = true;//Si correctPass -> true (Contraseña correcta)
        }
        if($correctPass){
           echo $correctPass;
        }else{
            echo "Wrong pass";
        }  
    }else{
        echo "User Dont Exist";
    }
    
    

   