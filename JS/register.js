import {error, success} from './functions.js';//Importar las funciones de error y success desde el archivo functions.js
$(document).ready(function(){//Metodo que se ejecuta cuando el documento esta listo

  

    $('.alert').hide();//Ocultar las alertas al iniciar la pagina

    $('#registerForm').on('submit',function(e){//Selecionar el formulario y asignarle un evento 'submit'



        if($('#registerUsername').val().length>0 && $('#registerPassword').val().length>0 && $('#registerTypeUser').val()!='Type' && $('#confirmPassword').val().length>0){//Validar que los campos no esten vacios
            
            if($('#registerPassword').val().length < 8){
                e.preventDefault();
                error('Password must be <b>8 characters long</b>')
                return
            }

            if($('#registerUsername').val()==$('#name').val()){
                e.preventDefault();
                error('The <b>username</b> and <b>name</b> must not match');
                return;
            }
            
            if($('#registerPassword').val() != $('#confirmPassword').val()){//Validar que las contraseñas coincidan
                $('.pass').css('border-color','red');//Cambiar el color del borde de los campos de contraseña para indicar que hay un error
                error('Passwords do not match');//Llamar a la funcion error y pasarle el mensaje de error
                console.log('Las contraseñas no coinciden');
                e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
                return;//Salir de la función para evitar que se ejecute el resto del código   
            }

            let registerData = {
                username: $('#registerUsername').val(),
                password: $('#registerPassword').val(),
                typeUser: $('#registerTypeUser').val(),
                name:     $('#name').val(),
                lastName: $('#lastName').val()
            }

            $.post('./PHP/register.php',registerData,function (response) {//Enviar por POST los datos registrador al archivo register.php
                if(response=='Exist'){
                    console.log(response);
                    console.log($('#registerPassword').val().length);
                    error('User exist')
                    return;
                }
                console.log(response)
                $('#registerForm').trigger('reset');//Reiniciar el formulario
                success('User registered successfully');//Llamar a la funcion success para mostrar el mensaje de exito
            });
            e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
            
            console.log(registerData);
        }else{
            error('All fields are required');//Llamar a la funcion error y pasarle el mensaje de error
        }

        e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
    })
})