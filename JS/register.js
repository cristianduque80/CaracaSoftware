$(document).ready(function(){//Metodo que se ejecuta cuando el documento esta listo

    $('.alert').hide();//Ocultar las alertas al iniciar la pagina
    $('#registerForm').on('submit',function(e){//Selecionar el formulario y asignarle un evento 'submit'
        if($('#registerUsername').val().length>0 && $('#registerPassword').val().length>0 && $('#registerTypeUser').val()!='Type' && $('#confirmPassword').val().length>0){//Validar que los campos no esten vacios
            if($('#registerPassword').val() != $('#confirmPassword').val()){//Validar que las contraseñas coincidan
               let errorType = 'Passwords do not match';//Mensaje de error
                error(errorType);//Llamar a la funcion error y pasarle el mensaje de error
                console.log('Las contraseñas no coinciden');
                e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
                return;//Salir de la función para evitar que se ejecute el resto del código   
            }


            console.log('Send');
            let userData ={
                username: $('#registerUsername').val(),
                password: $('#registerPassword').val(),
                typeUser: $('#registerTypeUser').val()
            }
            success();//Llamar a la funcion success para mostrar el mensaje de exito
            console.log(userData);



        }else{
            let errorType = 'All fields are required';//Mensaje de error
            error(errorType);//Llamar a la funcion error y pasarle el mensaje de error
            console.log('Falta dato');
        }
        e.preventDefault();//Metodo que cancela el comportamiento por defecto del formulario
     })

})


function error(errorType) { 
    $('#alertSuccess').hide();//Ocultar la alerta de exito en caso de que se haya mostrado el exito anteriormente
    $('#alertError').show();//Mostrar la alerta de error
    $('#alertError').html(errorType);//Agregar el mensaje de error a la alerta
}

function success() {
    $('.pass').css('border-color','');//Restablecer el color del borde de los campos de contraseña en caso de que se haya mostrado el error anteriormente
    $('#alertError').hide();//Ocultar la alerta de error en caso de que se haya mostrado el error anteriormente
    $('#alertSuccess').show();//Mostrar la alerta de exito
    $('#alertSuccess').html('User registered successfully');//Agregar el mensaje de exito a la alerta
}
