const inputText = document.querySelector('#input-text');
const mensajeText = document.querySelector('#mensaje');

/* 
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
const arrayCodigosEncriptado = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

function mostrarMensaje(){
    document.getElementById('mensaje').classList.remove('ocultar');
    document.getElementById('mensaje').classList.add('mostrar');

    document.getElementById('mensaje-nota').remove();
}

function encriptar() {
    if (inputText.value) {     
        const mensajeEncriptado = encriptarMensaje(inputText.value);
        mensajeText.value = mensajeEncriptado;
        mostrarMensaje();
        inputText.value = '';
    } else {
        alert("Error: Mensaje vacío. Ingresar mensaje a encriptar ");
    }

}

function encriptarMensaje(mensaje) {
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < arrayCodigosEncriptado.length; i++) {
        if (mensaje.includes(arrayCodigosEncriptado[i][0])) {
            mensaje = mensaje.replaceAll(arrayCodigosEncriptado[i][0], arrayCodigosEncriptado[i][1]);
        }
    }
    return mensaje;
}


function desencriptar() {
    const mensajeDesencriptado = desencriptarMensaje(inputText.value);
    mensajeText.value = mensajeDesencriptado;
    inputText.value = '';
}

function desencriptarMensaje(mensaje) {
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < arrayCodigosEncriptado.length; i++) {
        if (mensaje.includes(arrayCodigosEncriptado[i][1])) {
            mensaje = mensaje.replaceAll(arrayCodigosEncriptado[i][1], arrayCodigosEncriptado[i][0]);
        }
    }
    return mensaje;
}

function copiar() {
    mensajeText.select();

    navigator.clipboard
        .writeText(mensajeText.value)
        .then(() => {
            alert("Mensaje copiado: " + mensajeText.value);
            mensajeText.value = '';
        })
        .catch(() => {
            alert("Algo salio mal!");
        });

}

function pegar() {
    navigator.clipboard
        .readText()
        .then((clipText) => inputText.value = clipText)
        .catch(() => alert("Algo salio mal!"));
}