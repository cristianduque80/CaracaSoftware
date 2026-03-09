<?php
    include('../dbOn.php');
    session_start();
    ob_start();

    $table = "project_evaluation";
    $table2 = "project_votes";
    $value = $_POST['value'];
    $user_id = $_SESSION['user_id'];
    $has_voted = 0; 


    if(!empty($value)){
        $query = "SELECT * FROM $table WHERE title LIKE '$value%'";
        $result = mysqli_query($connection,$query);

        $json = [];
        while($row = mysqli_fetch_array($result)){
            $project_id = $row['id'];

            $query_vote = "SELECT * FROM $table2 WHERE project_id = '$project_id' AND user_id = '$user_id'";
            $result_vote = mysqli_query($connection,$query_vote);

            $has_voted = (mysqli_num_rows($result_vote) > 0) ? 1 : 0; 

            $json[] =[
                'id' => $row['id'],
                'title' => $row['title'],
                'description' => $row['description'],
                'has_voted' => $has_voted
            ]; 
        };     

        $jsonString = json_encode($json);
        echo $jsonString;
    }