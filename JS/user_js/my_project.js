$(document).ready(function(){
    console.log($('#my_project'));
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
                <tr>
                    <td class="border">${item.title}</td>
                    <td class="border">${item.description}</td>
                    <td class="border col-2">
                    <button class="btn btn-danger m-0">Delete</button>
                    <button class="btn btn-primary m-0">Update</button>
                    </td>
                </tr>
            `;   
        });
        }
       
        $('#my_project').html(template);
    });
})