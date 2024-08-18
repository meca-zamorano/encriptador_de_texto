const textArea = document.getElementById('textarea');
const messageContainer = document.getElementById('main-msm');
const abecedario = 'abcdefghijklmnopqrstuvwxyz'.split('');

//FUNCION PARA GENERAR UNA LETRA ALEATORIA DEL ABECEDARIO 
function letraAleatoria() {
    const letra = Math.floor(Math.random() * abecedario.length);
    return abecedario[letra];
}
const letraA = letraAleatoria();
console.log(letraA);

//FUNCION PARA ENCRIPTAR, ESTE INSERTA LA LETRA ALEATORIA EN EL TEXTO DIGITADO POR EL USUARIO
function encriptar(textArea){
    let textoEncriptado ='';
    for(let i = 0; i<textArea.length; i++ ){
        let caracter = textArea[i];
        if (caracter >= 'a' && caracter <= 'z') {
            textoEncriptado += caracter;
            textoEncriptado += obtenerLetraAleatoria();
    }
    return textoEncriptado;
}

textArea.addEventListener('input', function() {
    if (this.value.trim() !== "") {
        messageContainer.style.opacity = 0;
    } else {
        messageContainer.style.opacity = 1;
    }
});