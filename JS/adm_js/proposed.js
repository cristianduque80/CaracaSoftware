$(document).ready(function(){
    // console.log($('#my_project'));
    fetchProject();

    $('#searchProject').on('keyup',function (){
        let value = $('#searchProject').val();
        if(value==''){
            fetchProject();
            return;
        }
        $.post('../../PHP/php_adm/search_proposed_projects.php',{value},function(response){
            let project = JSON.parse (response);
            console.log(project);
            renderTable(project);            
        });
    });
})

//Funcion de Busqueda de projectos
function fetchProject () {
        $.get('../..//PHP/php_adm/proposed_projects.php', function(response){
        let list_projects = JSON.parse(response);
        let template = '';
        if (list_projects=="Empty"){
            template = `
                <tr>
                    <th colspan="4" class="text-center border-0"><h3>Projects Empty</h3></th>
                </tr>
            `;
            $('#my_project').html(template);
        }else{
            renderTable(list_projects);
        }
    });
}

//Funcion para renderizar tabla
function renderTable (type_select){
            let template = '';
            type_select.forEach(item =>{
                template +=`
                <tr id=${item.id}>
                    <td class="border title_project">${item.title}</td>
                    <td class="border text-break">${item.description}</td>
                    <td class="border text-break">${item.date}</td>
                    <td class="border text-break">${item.managemenTime}</td>
                </tr>
            `
            });
            
            $('#projects').html(template);
}