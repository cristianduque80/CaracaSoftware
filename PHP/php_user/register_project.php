<?php
    include('../dbON.php');
    session_start();
    ob_start();

    $title = $_POST['title'];
    $projectDescription = $_POST['projectDescription'];
    $user_id = $_SESSION['user_id'];
    $table = 'project_evaluation';

    $query="INSERT INTO $table (title, description, user_id) VALUES ('$title','$projectDescription','$user_id') ";
    $result = mysqli_query($connection,$query);

    if($result){
        echo 'SEND';
    }