<?php
    $host = "localhost";
    $user = 'root';
    $password = '12345';
    $db='CaracaSoftware';

    
    $table =  $_POST['typeUser'];

    $connection = mysqli_connect($host,$user,$password, $db);