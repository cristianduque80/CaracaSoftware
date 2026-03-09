<?php
    include('../dbOn.php');
    session_start();
    ob_start();
    $table = "project_evaluation";

    $user_id = $_SESSION['user_id'];
    $query = "SELECT * FROM $table WHERE user_id = '$user_id' ";
    $result = mysqli_query($connection,$query);
    $json = [];
    while($row = mysqli_fetch_array($result)){
        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'managemenTime' => $row['management_time']
        ];
    };

    if ($json!=[]){
        $jsonString = json_encode($json);
        echo $jsonString;
    }else{
        echo json_encode("Empty");
    }
