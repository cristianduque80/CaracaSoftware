<?php
    include('dbOn.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT into $tableTypeUser (username,password) VALUE ('$username','$password')";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query failed');
    }
    echo "User Add successful";