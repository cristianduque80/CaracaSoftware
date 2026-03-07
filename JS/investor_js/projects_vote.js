$(document).ready(function(){
    // console.log($('#my_project'));
    fetchProject();

    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_investor/project_search_vote.php',{value},function(response){
            let project = JSON.parse(response);
            let template = '';
            project.forEach(item =>{
                template +=`
                <tr id=${item.id}>
                    <td id="title" class="border">${item.title}</td>
                    <td id="description" class="border text-break">${item.description}</td>
                    <td class="border col-2">
                    <button class="btn btn-primary">
                        <img src="../../Style/icons/like.svg" alt="">
                    </button>
                    </td>
                </tr>
            `
            });
            $('#projects').html(template);
            console.log(project);
        });
    });

    $('button').on(click)
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../../PHP/php_investor/projects_vote.php', function(response){
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
                    <td id="description" class="border text-break">${item.description}</td>
                    <td class="border col-2 text-center">
                    <button class="btn btn-primary" >
                        <img src="../../Style/icons/like.svg" alt="">
                    </button>
                    </td>
                </tr>
            `;   
        });
        }
        $('#projects').html(template);
    });
}