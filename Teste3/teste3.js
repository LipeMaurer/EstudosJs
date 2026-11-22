// 1. Pegar os elementos da página
const botoes = document.querySelectorAll(".cartao button");
const popup = document.getElementById("popup");
const texto = document.getElementById("texto");
const fechar = document.getElementById("fechar");

// 2. Quando clicar em um botão dos cartões, abrir o pop-up
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        texto.textContent = botao.dataset.mensagem;  // coloca a mensagem
        popup.style.display = "block";               // mostra o pop-up
    });
});

// 3. Quando clicar em "Fechar", esconder o pop-up
fechar.addEventListener("click", function () {
    popup.style.display = "none";
});

