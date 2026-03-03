<?php
    include("../dbOn.php");
    $table = 'project';
    $id_project = $_POST['projectId'];
    
    $query = "DELETE FROM $table WHERE id = '$id_project'";

    $result = mysqli_query($connection,$query);

    if($result){
        echo "successful delete";
    }else{
        echo "Error";
    }