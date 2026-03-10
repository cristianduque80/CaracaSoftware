<?php
    include('../dbOn.php');
    session_start();
    ob_start();
    $table = "project_evaluation";

    $query = "SELECT * FROM $table ";
    $result = mysqli_query($connection,$query);
    $json = [];
    while($row = mysqli_fetch_array($result)){
        $date = new DateTime($row['time_p']);

        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'managemenTime' => $row['management_time'],
            'date' => $date->format('d/m/Y')
        ];
    };

    if ($json!=[]){
        $jsonString = json_encode($json);
        echo $jsonString;
    }else{
        echo json_encode("Empty");
    }
