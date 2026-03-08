import {error,success} from "./../functions.js";//Importar las funciones de error y success desde el archivo functions.js 
$(document).ready(function (){//Se ejecuta cuando el documento esta listo

    $('.alert').hide();//Oculta los alertas de error y exito

    $('#form_project').on('submit',function(e){//Metodo que se ejecuta cuando se envia el formulario
        let projectData = {//Datos del projecto
            title: $('#project_title').val(),
            projectDescription: $('#project_description').val()
        }
   
       if( projectData.title.length == 0 || projectData.projectDescription.length == 0){//Verificando que los inputs no esten vacios
        error('All fields are required');
        e.preventDefault();
        return;
       }

       $.post('../..//PHP/php_user/register_project.php',projectData,function(response){
            console.log(response);
            success('Project submitted successfully')
            $('#form_project').trigger('reset');//Reiniciar el formulario
       });

       e.preventDefault();
    });
});