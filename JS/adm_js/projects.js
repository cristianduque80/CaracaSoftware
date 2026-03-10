$(document).ready(function(){

    fetchProject();//Busqueda de los projectos 

    $(document).on('click','.delete',function(){//Eliminacion de projecto
    let container = $(this).closest('tr');//Seleccion del elemento padre primario del projecto
    let projectId = container.attr('id'); //Obtencion del ID del elemento padre primario
    let projectitle = container.find('.title_project').text();

    if(confirm(`Are you sure you want to delete the project: ${projectitle}?`)){
        $.post('../../PHP/php_adm/project_delete.php',{projectId},function(response){//Enviamos el ID del elemento padre el cual es el ID relacionado al projecto para eliminarlo
            console.log(response);
            fetchProject();

        });
    }
    })

    //Busqueda personalizada de proyectos
    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_adm/project_search.php',{value},function(response){
            let project = JSON.parse (response);
            console.log(project);
            let template = '';
            if(project.length==0){
                template = `
                <tr>
                    <th colspan="2" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
            }else{
                project.forEach(item =>{
                    let priorityClass = '';
                    if(item.priority=='h'){
                        priorityClass='priority-h';
                    }else if(item.priority=='m' ){
                        priorityClass='priority-m';
                    }else if(item.priority=='l'){
                        priorityClass='priority-l';
                    }

                    template +=`
                    <tr id="${item.id}" class="${priorityClass}">
                        <td class="border title_project">${item.title}</td>
                        <td class="border text-break">${item.description}</td>
                        <td class="border text-break">${item.date}</td>
                        <td class="border text-break">${item.managemenTime}</td>
                        <td class="border col-1 text-center">
                            <select class="form-select"}">
                                <option value="" ${!item.priority ? 'selected' : ''} hidden selected>None</option>
                                <option value="h" ${item.priority == 'h' ? 'selected hidden' : ''}>High</option>
                                <option value="m" ${item.priority == 'm' ? 'selected hidden' : ''}>Medium</option>
                                <option value="l" ${item.priority == 'l' ? 'selected hidden' : ''}>Low</option>
                            </select>
                        </td>
                        <td class="border col-1 text-center align-middle">
                            <button class="btn btn-danger m-0 delete">Delete</button>
                            <!---<button class="btn btn-primary m-0 update">Update</button>--->
                        </td>
                    </tr>
                `
                });
            }
            $('#projects').html(template);
           
        });
    });

    //Se le agrega una clase is-dirty a aquellos projectos que se les cambio la prioridad
    $(document).on('change','.form-select',function () {  
        let $row = $(this).closest('tr');//Seleccion del elemento padre 
        let priority = $(this).val();
        $('#btn-save').removeAttr('disabled');

        $row.addClass('is-dirty');
        rowColor($row,priority)//Aplicando el color establecido
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
        let template = '';
        if (list_projects=="Empty"){
            template = `
                <tr>
                    <th colspan="2" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
        }else{
            list_projects.forEach(item =>{
                let priorityClass = '';
                if(item.priority=='h'){
                    priorityClass='priority-h';
                }else if(item.priority=='m' ){
                    priorityClass='priority-m';
                }else if(item.priority=='l'){
                    priorityClass='priority-l';
                }

                template+=`
                    <tr class="${priorityClass}" id="${item.id}">
                        <td class="border title_project">${item.title}</td>
                        <td class="border text-break">${item.description}</td>
                        <td class="border text-break">${item.date}</td>
                        <td class="border text-break">${item.managemenTime}</td>
                        <td class="border col-1 text-center">
                            <select class="form-select"}">
                                <option value="" ${!item.priority ? 'selected' : ''} hidden selected>None</option>
                                <option value="h" ${item.priority == 'h' ? 'selected hidden' : ''}>High</option>
                                <option value="m" ${item.priority == 'm' ? 'selected hidden' : ''}>Medium</option>
                                <option value="l" ${item.priority == 'l' ? 'selected hidden' : ''}>Low</option>
                            </select>
                        </td>
                        <td class="border col-1 text-center align-middle">
                            <button class="btn btn-danger m-0 delete">Delete</button>
                            <!---<button class="btn btn-primary m-0 update">Update</button>--->
                        </td>
                    </tr>
                `;   
        });
        }
        $('#projects').html(template);
        
    });
}


//Funcion para actualizar color de fondo de la fila segunda la prioridad
function rowColor ($row,priority){
    $row.removeClass('priority-h priority-m priority-l');

    if (priority === 'h') $row.addClass('priority-h');
    else if (priority === 'm') $row.addClass('priority-m');
    else if (priority === 'l') $row.addClass('priority-l');
}
