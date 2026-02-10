export function error(errorType) { 
    $('#alertSuccess').hide();//Ocultar la alerta de exito en caso de que se haya mostrado el exito anteriormente
    $('#alertError').show();//Mostrar la alerta de error
    $('#alertError').html(errorType);//Agregar el mensaje de error a la alerta
}

export function success(msg) {
    $('.pass').css('border-color','');//Restablecer el color del borde de los campos de contraseña en caso de que se haya mostrado el error anteriormente
    $('#alertError').hide();//Ocultar la alerta de error en caso de que se haya mostrado el error anteriormente
    $('#alertSuccess').show();//Mostrar la alerta de exito
    $('#alertSuccess').html('msg');//Agregar el mensaje de exito a la alerta
}