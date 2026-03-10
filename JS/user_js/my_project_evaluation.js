$(document).ready(function(){
    // console.log($('#my_project'));
    fetchProject();

    $(document).on('click','.delete',function(){//Eliminacion de projecto
        let container = $(this).closest('tr');//Seleccion del elemento padre primario del projecto
        let projectId = container.attr('id'); //Obtencion del ID del elemento padre primario
        let projectitle = container.find('.title_project').text();

        if(confirm(`Are you sure you want to delete the project: ${projectitle}?`)){
            $.post('../../PHP/php_user/project_delete.php',{projectId},function(response){//Enviamos el ID del elemento padre el cual es el ID relacionado al projecto para eliminarlo
                console.log(response);
                fetchProject();

            });
        }

    })

    // $(document).on('click','.update', function (){
    //     $('.update-overlay').show();

    //     let project = $(this)[0].parentElement.parentElement;//Seleccion del elemento padre primario del projecto
    //     let projectattr = $(project).attr('id'); //Obtencion del ID del elemento padre primario
    //     update(projectattr);
    // });

    // $(document).on('click','#btn-close-update', function (){
    //     $('.update-overlay').hide();
    // });

    //Modulo de busqueda de projecto
    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_user/project_search_evaluation.php',{value},function(response){
            let project = JSON.parse (response);
            renderTable(project);            
        });
    });
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_user/my_project_evaluation.php', function(response){
        let list_projects = JSON.parse(response);
        let template = '';
        if (list_projects=="Empty"){
            template = `
                <tr>
                    <th colspan="2" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
            $('#my_project').html(template);
        }else{
            renderTable(list_projects);
        }
    });
}

// //Funcion para actualizar projecto
// function update (projecId){
//     $('#update').on('click',function (e){
//         let update_project = {
//             title: $('#project_title').val(),
//             description: $('#project_description').val(),
//             id: projecId
//         };

//         $.post('../../PHP/php_user/project_update.php',update_project,function (response){
//             fetchProject();
//             $('#form_project').trigger('reset');
//             $('.update-overlay').hide();
//             console.log(response);
//         }); 
        
//         e.preventDefault();
//     });
// }

//Funcion para renderizar tabla
function renderTable (type_select){
            let template = '';
            type_select.forEach(item =>{
                template +=`
                <tr id=${item.id}>
                    <td class="border title_project">${item.title}</td>
                    <td class="border text-break">${item.description}</td>
                    <td class="border text-break">${item.managemenTime}</td>
                    <td class="border text-break">${item.date}</td>
                    <td class="border col-2 text-center align-middle">
                        <button class="btn btn-danger m-0 delete">Delete</button>
                        <!---<button class="btn btn-primary m-0 update">Update</button>--->
                    </td>
                </tr>
            `
            });
            
            $('#my_project').html(template);
}