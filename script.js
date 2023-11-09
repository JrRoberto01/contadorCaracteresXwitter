const textarea = document.getElementById('texto');
const charCount = document.getElementById('resultado');

textarea.addEventListener('input', function() {
        const text = textarea.value;
        charCount.textContent = text.length + "/280 caracteres";

        if (text.length > 280) {
            charCount.classList.remove('pass');
            charCount.classList.add('exceed');
        } else {
            charCount.classList.remove('exceed');
            charCount.classList.add('pass');
        }
    });

function copiarTexto(){
    const text = textarea.value;
    charCount.textContent = text.length + "/280 caracteres";

    if (text.length > 280){
        alert("Seu texto deve haver menos de 280 Caracteres");
    }else if (text.length == 0){
        alert("Escreva um texto para copiar")
    }else{
        alert("Texto Copiado")
        textarea.select();
        document.execCommand('copy');
    }
}