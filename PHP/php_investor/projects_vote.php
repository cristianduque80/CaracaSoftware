<?php
    include('../dbOn.php');
    session_start();
    
    $investor_id =  $_SESSION['user_id']; 
    $table = "project_evaluation";

    // Traemos el proyecto y verificamos si este usuario específico ya votó
    $query = "SELECT pe.*, 
            (SELECT COUNT(*) FROM project_votes pv 
            WHERE pv.project_id = pe.id AND pv.user_id = '$investor_id') as has_voted 
            FROM $table pe";

    $result = mysqli_query($connection, $query);
    $json = [];

    while($row = mysqli_fetch_array($result)){
        $json[] = [
            'id' => $row['id'],
            'title' => $row['title'],
            'description' => $row['description'],
            'has_voted' => $row['has_voted'] // 0 si no ha votado, 1 si ya votó
        ];
    };

    echo (empty($json)) ? json_encode("Empty") : json_encode($json);