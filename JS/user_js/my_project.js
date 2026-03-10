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
        $('.update-overlay').show();

        let project = $(this)[0].parentElement.parentElement;//Seleccion del elemento padre primario del projecto
        let projectattr = $(project).attr('id'); //Obtencion del ID del elemento padre primario
        update(projectattr);
    });

    $(document).on('click','#btn-close-update', function (){
        $('.update-overlay').hide();
    });

    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_user/project_search.php',{value},function(response){
            let project = JSON.parse (response);
            let template = '';
            project.forEach(item =>{
                let priorityClass = '';
                let priority='';

                if(item.priority=='h'){
                    priorityClass='priority-h';
                    priority="high";
                }else if(item.priority=='m' ){
                    priorityClass='priority-m';
                    priority="medium";
                }else if(item.priority=='l'){
                    priorityClass='priority-l';
                    priority="low";
                }else if(!item.priority){
                    priority = "none";
                }

                template +=`
                <tr id="${item.id}" class="${priorityClass}">
                    <td id="title" class="border">${item.title}</td>
                    <td id="description" class="border text-break">${item.description}</td>
                    <td id="description" class="border text-break">${item.date}</td>
                    <td id="description" class="border text-break">${item.managemenTime}</td>
                    <td class="border col-2">${priority}</td>
                </tr>
            `
            });
            
            $('#my_project').html(template);
            
            console.log(project);
        });
    });
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_user/my_project.php', function(response){
            let project = JSON.parse (response);
            console.log(project);
            let template = '';
            if(project.length==0){
                template = `
                <tr>
                    <th colspan="5" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
            }else{
                project.forEach(item =>{
                    let priorityClass = '';
                    let priority='';

                    if(item.priority=='h'){
                        priorityClass='priority-h';
                        priority="high";
                    }else if(item.priority=='m' ){
                        priorityClass='priority-m';
                        priority="medium";
                    }else if(item.priority=='l'){
                        priorityClass='priority-l';
                        priority="low";
                    }else if(!item.priority){
                        priority = "none";
                    }

                    template +=`
                    <tr id="${item.id}" class="${priorityClass}">
                        <td id="title" class="border">${item.title}</td>
                        <td id="description" class="border text-break">${item.description}</td>
                        <td id="description" class="border text-break">${item.date}</td>
                        <td id="description" class="border text-break">${item.managemenTime}</td>
                        <td class="border col-2">${priority}</td>
                    </tr>
                `
                });
            }
       
        $('#my_project').html(template);
    });
}

//Funcion para actualizar projecto
function update (projecId){
    $('#update').on('click',function (e){
        let update_project = {
            title: $('#project_title').val(),
            description: $('#project_description').val(),
            id: projecId
        };

        $.post('../../PHP/php_user/project_update.php',update_project,function (response){
            fetchProject();
            $('#form_project').trigger('reset');
            $('.update-overlay').hide();
            console.log(response);
        }); 
        
        e.preventDefault();
    });
}