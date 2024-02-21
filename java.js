const palavras = {
    fruta: ["limão", "caju", "figo", "pera", "kiwi", "manga", "açaí", "caqui", "damas", "jambo"],
    animal: ["pato", "leão", "tigre", "panda", "gato", "rato", "cobra", "urso", "carpa", "peixe"]
};

let categoriaSelecionada = "";
let palavraSorteada = "";
let tentativasRestantes = 3;

function iniciarJogo() {
    tentativasRestantes = 3;
    escolherPalavra();
}

function escolherPalavra() {
    const categoriaDropdown = document.getElementById("categoria");
    categoriaSelecionada = categoriaDropdown.options[categoriaDropdown.selectedIndex].value;

    const palavrasFiltradas = palavras[categoriaSelecionada].filter(palavra => palavra.length >= 4 && palavra.length <= 5);

    if (palavrasFiltradas.length === 0) {
        alert(`Sem palavras com 4 ou 5 letras na categoria ${categoriaSelecionada}.`);
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * palavrasFiltradas.length);
    palavraSorteada = palavrasFiltradas[indiceSorteado];

    document.getElementById("pergunta").innerText = `Adivinhe a palavra que começa com a letra ${palavraSorteada[0]}`;
    document.getElementById("resposta").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("categoria").disabled = true;
}

function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.toLowerCase();
    
    if (respostaUsuario === palavraSorteada) {
        document.getElementById("resultado").innerText = "Parabéns! Você acertou!";
    } else {
        tentativasRestantes--;

        if (tentativasRestantes > 0) {
            document.getElementById("resultado").innerText = `Ops! Tente novamente. Tentativas restantes: ${tentativasRestantes}`;
        } else {
            document.getElementById("resultado").innerText = `Você não acertou. A palavra era: ${palavraSorteada}`;
        }

        document.getElementById("categoria").disabled = false;
    }
}
