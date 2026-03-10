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

  if ($data['total'] >= 1) {
    // Migración: Seleccionamos el user_id (creador) directamente de project_evaluation
    $move_query = "INSERT INTO project (id, title, description, management_time,user_id) 
                   SELECT id, title, description, management_time,user_id 
                   FROM project_evaluation 
                   WHERE id = '$project_id'";
    
    if (mysqli_query($connection, $move_query)) {
        // Al eliminar de evaluación, los votos se limpian solos por el CASCADE que ya configuraste
        mysqli_query($connection, "DELETE FROM project_evaluation WHERE id = '$project_id'");
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