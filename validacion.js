const nombre = document.getElementById('nombreyapellido');
const mail = document.getElementById('correoelectronico');
const mensaje = document.getElementById('mensaje');
const error = document.getElementById('error');
const form = document.getElementById('form');

function enviarFormulario() {
    console.log('Enviando formulario');
    let warnings = '';
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    error.innerHTML = '';
    if(nombre.value === null || nombre.value === '') {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El campo de nombre es obligatorio <br>'
        entrar= true;
    }
    if(nombre.value.length >50) {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El nombre no puede contener mas de 50 caracteres <br>'
        entrar= true;
    }
    if(mail.value === null || mail.value === '') {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El campo de correo electrónico es obligatorio <br>'
        entrar= true;
    }
    if(!regexEmail.test(mail.value)) {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El mail no es válido <br>'
        entrar= true;
    }
    if(mensaje.value === null || mensaje.value === '') {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El campo de mensaje es obligatorio <br>'
        entrar= true;
    }
    if(mensaje.value.length >300) {
        error.style.color= 'red'
        error.style.fontSize= '20px'
        warnings += 'El mensaje no debe superar los 300 caracteres <br>'
        entrar= true;
    }
    if(entrar) {
        error.innerHTML= warnings;
    }
    else {
        error.style.color= 'green'
        error.style.fontSize= '30px'
        error.style.fontWeight='bold'
        error.innerHTML= 'Formulario enviado correctamente'
        document.getElementById('nombreyapellido').value= '';
        document.getElementById('correoelectronico').value= '';
        document.getElementById('mensaje').value= '';
        document.getElementById('telefono').value= '';
    }

    return false;
}