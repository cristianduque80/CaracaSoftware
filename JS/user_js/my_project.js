$(document).ready(function(){
    // console.log($('#my_project'));
    fetchProject();

    $(document).on('click','.delete',function(){//Eliminacion de projecto
        let project = $(this)[0].parentElement.parentElement;//Seleccion del elemento padre primario del projecto
        let projectId = $(project).attr('id'); //Obtencion del ID del elemento padre primario
        $.post('../../PHP/php_user/project_delete.php',{projectId},function(response){//Enviamos el ID del elemento padre el cual es el ID relacionado al projecto para eliminarlo
            console.log(response);
            fetchProject();

        });
    })

    $(document).on('click','.update', function (){
        let project = $(this)[0].parentElement.parentElement;//Seleccion del elemento padre primario del projecto
        let projectId = $(project).attr('id');//Obtencion del ID del elemento padre primario
        $.post('../../PHP/php_user/project_update.php',{projectId, function (response){  
            console.log(response);
        }})

        $('.update-overlay').show();
    });

    $(document).on('click','#btn-close-update', function (){
        $('.update-overlay').hide();
    });
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_user/my_project.php', function(response){
        let list_projects = JSON.parse(response);
        console.log(list_projects);
        let template = '';
        if (list_projects=="Empty"){
            template = `
                <tr>
                    <th colspan="2" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
        }else{
            list_projects.forEach(item =>{
            template+=`
                <tr id=${item.id}>
                    <td id="title" class="border">${item.title}</td>
                    <td id="description" class="border">${item.description}</td>
                    <td class="border col-2">
                    <button class="btn btn-danger m-0 delete">Delete</button>
                    <button class="btn btn-primary m-0 update">Update</button>
                    </td>
                </tr>
            `;   
        });
        }
       
        $('#my_project').html(template);
    });
}