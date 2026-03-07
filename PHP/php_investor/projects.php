<?php
    include('../dbOn.php');
    $table = "project";

    $query = "SELECT * FROM $table";
    $result = mysqli_query($connection,$query);
    $json = [];
    while($row = mysqli_fetch_array($result)){
        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'priority' => $row['priority']
        ];
    };

    if ($json!=[]){
        $jsonString = json_encode($json);
        echo $jsonString;
    }else{
        echo json_encode("Empty");
    }
