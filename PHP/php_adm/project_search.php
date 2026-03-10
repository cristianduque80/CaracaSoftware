<?php
    include('../dbOn.php');
    $table = "project";
    $value = $_POST['value'];

    if(!empty($value)){
        $query = "SELECT * FROM $table WHERE title LIKE '$value%'";
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
        $jsonString = json_encode($json);
        echo $jsonString;
    }