// Pegar os elementos da página
const botoes = document.querySelectorAll(".cartao button");
const popup = document.getElementById("popup");
const texto = document.getElementById("texto");
const fechar = document.getElementById("fechar");

// Quando clicar em um botão dos cartões, abrir o pop-up
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        texto.textContent = botao.dataset.mensagem;  // coloca a mensagem
        popup.style.display = "block";               // mostra o pop-up
    });
});

// Quando clicar em "Fechar", esconder o pop-up
fechar.addEventListener("click", function () {
    popup.style.display = "none";
});


// ETAPA 1
// Nas constantes estou apenas pegando os elementos de cada um sendo o unico diferente o .cartao button que eu estou puxando todos os dele da pagina

// ETAPA 2
// botoes.forEach(Function (botao){})
// aqui esta sendo utilizado o 'forEach' para puxar todos os itens que estao na constante botoes assim criando uma funcao chamada botao para seguir com as proximas acoes

// ETAPA 3
// botao.addEventListener("click", function () {})
// aqui a funcao 'botao' esta adicionando um evento de espera que no caso a ativacao para ele seria o "click"

// ETAPA 4 
// texto.textContent = botao.dataset.mensagem
// popup.style.display = "block"
// aqui no texto.textContent ele escreve a mensagem do botao dentro do <p id="texto">
// ja no popup.style.display = "block" ele troca oo display: none por block assim fazendo popup aparecer

// ETAPA 5
// popup.style.display = "none";
// quando o usuario clica em fechar o display volta para none e popup some