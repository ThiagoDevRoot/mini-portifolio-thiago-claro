/*Comentário em JS*/

//Passo 1 - Dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

// Passo 2 - Dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesAba(aba)

    });


});


function selecionarAba(aba) {
    // Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // Passo 4 - Marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesAba(aba) {
    // Passo 5 - Esconder o conteudo anterior 
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // Passo 6 - Mostrar o conteudo da aba selecionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}