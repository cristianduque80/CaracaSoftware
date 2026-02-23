
import {error,success} from "./functions.js";//Importar las funciones de error y success desde el archivo functions.js
$(document).ready(function(){//Metodo que se ejecuta cuando el documento esta listo

    $('.alert').hide();//Oculta los alertas de error y exito

    $('#loginForm').on('submit', function(e){//Metodo que se ejecuta cuando se envia el formulario

        if($('.form-check-input:checked').val() == undefined || $('#username').val() == '' || $('#password').val() == ''){//Condicion que se ejecuta cuando no se ha seleccionado un tipo de usuario, ni se han ingresado las credenciales
            e.preventDefault();
            error('All fields are required');//Llamar a la funcion error y pasarle el mensaje de error
            return
        }

        let logUser = {//Objeto que se crea para almacenar los datos del usuario que se va a logear
            typeUser: $('.form-check-input:checked').val(),
            username: $('#username').val(),
            password: $('#password').val(),
        }

        $.post('./PHP/login.php',logUser,function(response){
            if(response==true){
                    success('Login successful');//Llamar a la funcion success y pasarle el mensaje de exito
                    if(logUser.typeUser=='admins'){
                       window.location.href = './pages/executive/my_profile.php';//Redireccionar a la pagina principal de executive  
                    }else if(logUser.typeUser=='user'){
                        window.location.href = './pages/user/my_profile.php';//Redireccionar a la pagina principal de user 
                    } 
            }else{
                error(response);
            }

            
            
        })
            e.preventDefault();
    });
})

    