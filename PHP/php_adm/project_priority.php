<?php
    include('../dbOn.php');
    $table = "project";

    if (isset($_POST['data'])) {
        $projects = json_decode($_POST['data'], true);

        foreach ($projects as $project) {
            $id = $project['id'];
            $priority = $project['priority'];

            // Sanitización básica para evitar inyecciones
            $id = mysqli_real_escape_string($connection, $id);
            $priority = mysqli_real_escape_string($connection, $priority);

            $query = "UPDATE $table SET priority = '$priority' WHERE id = '$id'";
            mysqli_query($connection, $query);
        }

        echo "Success";
    } else {
        echo "No data received";
    }
