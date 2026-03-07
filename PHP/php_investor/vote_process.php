<?php
include('../dbOn.php');
session_start();

$user_id = $_SESSION['user_id']; 
$project_id = $_POST['project_id'];

// 1. Intentar registrar el voto
$query_vote = "INSERT INTO project_votes (user_id, project_id) VALUES ('$user_id', '$project_id')";

if (mysqli_query($connection, $query_vote)) {
    
    // 2. Contar votos actuales del proyecto
    $query_count = "SELECT COUNT(*) as total FROM project_votes WHERE project_id = '$project_id'";
    $result = mysqli_query($connection, $query_count);
    $data = mysqli_fetch_assoc($result);

    if ($data['total'] >= 10) {
        // 3. MIGRACIÓN: Si llega a 10 votos, pasar a la tabla definitiva
        
        // Copiar datos a la tabla 'projects'
        $move_query = "INSERT INTO projects (id, title, description) 
                       SELECT id, title, description FROM projects_evaluation 
                       WHERE id = '$project_id'";
        
        if (mysqli_query($connection, $move_query)) {
            // Eliminar de la tabla de evaluación (los votos se borrarán por ON DELETE CASCADE)
            mysqli_query($connection, "DELETE FROM projects_evaluation WHERE id = '$project_id'");
            echo "ProjectApproved"; 
        }
    } else {
        echo "VoteRegistered";
    }
} else {
    if (mysqli_errno($connection) == 1062) echo "AlreadyVoted";
    else echo "Error";
}
?>