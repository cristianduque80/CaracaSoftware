<?php
    include('../dbON.php');
    session_start();
    ob_start();

    $title = $_POST['title'];
    $projectDescription = $_POST['projectDescription'];
    $user_id = $_SESSION['user_id'];
    $management_time = $_POST['management_time'];
    $table = 'project_evaluation';

    $query="INSERT INTO $table (title, description, user_id, management_time) VALUES ('$title','$projectDescription','$user_id', '$management_time') ";
    $result = mysqli_query($connection,$query);

    if($result){
        echo 'SEND';
    }