$(document).ready(function(){

    fetchProject();//Busqueda de los projectos 

    //Busqueda personalizada de proyectos
    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_investor/project_search.php',{value},function(response){
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
            $('#projects').html(template);
           
        });
    });

})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_investor/projects.php', function(response){
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

                template+=`
                    <tr class="${priorityClass}" id="${item.id}">
                        <td id="title" class="border">${item.title}</td>
                        <td id="description" class="border text-break">${item.description}</td>
                        <td id="description" class="border text-break">${item.date}</td>
                        <td id="description" class="border text-break">${item.managemenTime}</td>
                        <td class="border col-2">${priority}</td>
                    </tr>
                `;   
        });
        }
        $('#projects').html(template);
    });
}

