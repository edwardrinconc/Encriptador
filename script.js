const textArea = document.querySelector(".texto");
const resultado = document.querySelector(".resultado");

function btnEncriptar(){
    const resultadoEncriptado = encriptar(textArea.value)
    resultado.value = resultadoEncriptado;
    textArea.value = "";
    resultado.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const resultadoDesencriptado = desencriptar(textArea.value)
    resultado.value = resultadoDesencriptado;
    textArea.value = "";
    resultado.style.backgroundImage = "none";
}

function encriptar(texto){
    let reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < reglas.length; i++){
        if(texto.includes(reglas[i][0])){
            texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    let reglas = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    texto = texto.toLowerCase();
    for(let i = 0; i < reglas.length; i++){
        if(texto.includes(reglas[i][0])){
            texto = texto.replaceAll(reglas[i][0], reglas[i][1]);
        }
    }
    return texto;
}

function btnCopiarTexto(){
    
    let textoC = document.querySelector(".resultado");
    textoC.select();
    document.execCommand("copy");
    
}