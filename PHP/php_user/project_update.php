<?php
    include("../dbOn.php");

    $title = $_POST['title'];
    $description = $_POST['description'];
    $id = $_POST['id'];

    $query = "UPDATE `project` SET title='$title' , description ='$description' WHERE id = $id ";
    $result = mysqli_query($connection,$query);
    
    if($result){
        echo "Actualizacion exitosa";
    }
