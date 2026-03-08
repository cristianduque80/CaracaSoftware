<?php
    include('../dbOn.php');
    $table = "project_evaluation";
    $value = $_POST['value'];

    if(!empty($value)){
        $query = "SELECT * FROM $table WHERE title LIKE '$value%'";
        $result = mysqli_query($connection,$query);

        $json = [];
        while($row = mysqli_fetch_array($result)){
            $json[] =[
                'id' => $row['id'],
                'title' => $row['title'],
                'description' => $row['description']
            ]; 
        };
        $jsonString = json_encode($json);
        echo $jsonString;
    }