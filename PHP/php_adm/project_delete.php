<?php
    include("../dbOn.php");
    $id_project = $_POST['projectId'];
    $table = "project";
    
    $query = "DELETE FROM $table WHERE id = '$id_project'";

    $result = mysqli_query($connection,$query);

    if($result){
        echo "successful delete";
    }else{
        echo "Error";
    }