$(document).ready(function(){
    fetchProject();

    // Funcion de busqueda
    $('#searchProject').on('keyup', function (){
        let value = $('#searchProject').val();
        if(value == ''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_investor/project_search_vote.php', {value}, function(response){
            renderTable(response);
        });
    });

    // Modulo de votacion
    $(document).on('click', '.btn-vote', function() {
        let btn = $(this);
        let container = btn.closest('tr');
        let projectId = container.attr('id');

        $.post('../../PHP/php_investor/vote_process.php', { project_id: projectId }, function(response) {
            if(response.trim() == "VoteRegistered" || response.trim() == "ProjectApproved") {
                // Deshabilitar botón tras votar
                btn.prop('disabled', true).removeClass('btn-primary').addClass('btn-success');
                alert("¡Voto registrado con éxito!");
                
                if(response.trim() == "ProjectApproved") {
                    alert("¡El proyecto ha alcanzado los 2 votos y ha sido aprobado!");
                    fetchProject(); // Recargamos para que desaparezca de evaluación
                }
            } else if (response.trim() == "AlreadyVoted") {
                alert("Ya has votado por este proyecto anteriormente.");
            }
        });
    });
});

function fetchProject() {
    $.get('../../PHP/php_investor/projects_vote.php', function(response){
        renderTable(response);
    });
}

//Renderizado de la tabla de proyectos disponibles para votar
function renderTable(response) {
    let list_projects = JSON.parse(response);
    let template = '';

    if (list_projects == "Empty") {
        template = `<tr><th colspan="3" class="text-center border-0"><h3>No projects to vote</h3></th></tr>`;
    } else {
        list_projects.forEach(item => {
            // Si has_voted es 1, el botón nace deshabilitado
            let isVoted = item.has_voted > 0;
            let btnClass = isVoted ? 'btn-success' : 'btn-primary';
            let btnDisabled = isVoted ? 'disabled' : '';

            template += `
                <tr id="${item.id}">
                    <td class="border">${item.title}</td>
                    <td class="border text-break">${item.description}</td>
                    <td class="border col-2 text-center">
                        <button class="btn ${btnClass} btn-vote" ${btnDisabled}>
                            <img src="../../Style/icons/like.svg" alt="">
                        </button>
                    </td>
                </tr>`;
        });
    }
    $('#projects').html(template);
}