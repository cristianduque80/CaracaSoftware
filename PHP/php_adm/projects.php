<?php
    include('../dbOn.php');
    $table = "project";

    $query = "SELECT * FROM $table";
    $result = mysqli_query($connection,$query);
    $json = [];
    while($row = mysqli_fetch_array($result)){
        $date = new DateTime($row['time_d']);

        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'managemenTime' => $row['management_time'],
            'date' => $date->format('d/m/Y'),
            'priority' => $row['priority']
        ];
    };

    if ($json!=[]){
        $jsonString = json_encode($json);
        echo $jsonString;
    }else{
        echo json_encode("Empty");
    }
