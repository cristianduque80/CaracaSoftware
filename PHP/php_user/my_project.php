<?php
    include('../dbOn.php');
    session_start();
    ob_start();
    $table = "project";

    $user_id = $_SESSION['user_id'];
    $query = "SELECT * FROM $table WHERE user_id = '$user_id' ";
    $result = mysqli_query($connection,$query);
    $json = [];
    while($row = mysqli_fetch_array($result)){
        $date = new DateTime($row['time_d']);
    
        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'managemenTime' => $row['management_time'],
            'priority' => $row['priority'],
            'date' => $date->format('d/m/Y')
        ];
    };

    if ($json!=[]){
        $jsonString = json_encode($json);
        echo $jsonString;
    }else{
        echo json_encode("Empty");
    }
