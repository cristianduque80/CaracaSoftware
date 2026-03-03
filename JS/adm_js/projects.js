$(document).ready(function(){

    fetchProject();//Busqueda de los projectos 

    //Busqueda personalizada de proyectos
    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_adm/project_search.php',{value},function(response){
            let project = JSON.parse (response);
            let template = '';
            project.forEach(item =>{
                template +=`
                <tr id=${item.id}>
                    <td id="title" class="border">${item.title}</td>
                    <td id="description" class="border">${item.description}</td>
                    <td class="border col-2 text-center">
                    <select class="form-select">
                        <option hidden selected>None</option>
                        <option value="h">High</option>
                        <option value="m">Medium</option>
                        <option value="l">Low</option>
                    </select>
                    </td>
                </tr>
            `
            });
            
            $('#projects').html(template);
            
            console.log(project);
        });
    });

    //Se le agrega una clase is-dirty a aquellos projectos que se les cambio la prioridad
    $(document).on('change','.form-select',function () {  
        $(this).closest('tr').addClass('is-dirty');
    });

    //Guardado de prioridad
    $(document).on('click', '#btn-save', function(){
        let projectsData = [];
        // Filtramos solo las filas que tienen la clase .is-dirty
        $('.is-dirty').each(function() {
            let id = $(this).attr('id');
            let priority = $(this).find('.form-select').val();

            projectsData.push({
                id: id,
                priority: priority
            });
        });

        if (projectsData.length > 0) {
            $.post('../../PHP/php_adm/project_priority.php', { data: JSON.stringify(projectsData) }, function(response) {
                // Quitamos la marca
                $('.is-dirty').removeClass('is-dirty');
                
                alert("Prioridades actualizadas correctamente.");
            });
        }
    });
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_adm/projects.php', function(response){
        let list_projects = JSON.parse(response);
        // console.log(list_projects);
        let template = '';
        if (list_projects=="Empty"){
            template = `
                <tr>
                    <th colspan="2" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
        }else{
            list_projects.forEach(item =>{
            let priority = '';
            if(item.priority === 'h'){
                priority = 'priority'
            }

            template+=`
                <tr id=${item.id}>
                    <td id="title" class="border">${item.title}</td>
                    <td id="description" class="border">${item.description}</td>
                    <td class="border col-2 text-center">
                    <select class="form-select"}">
                        <option value="" ${item.priority == null ? 'selected' : ''} hidden selected>None</option>
                        <option value="h" ${item.priority == 'h' ? 'selected' : ''}>High</option>
                        <option value="m" ${item.priority == 'm' ? 'selected' : ''}>Medium</option>
                        <option value="l" ${item.priority == 'h' ? 'selected' : ''}>Low</option>
                    </select>
                    </td>
                </tr>
            `;   
        });
        }
       
        $('#projects').html(template);
    });
}

function rowColor (){
    $row.removeClass('priority-h priority-m priority-l');

    if (priority === 'h') $row.addClass('priority-high');
    else if (priority === 'm') $row.addClass('priority-medium');
    else if (priority === 'l') $row.addClass('priority-low');
}
