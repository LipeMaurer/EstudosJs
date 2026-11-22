const texto1 = "teste1"
const texto2 = "teste2"
const texto3 = "teste3"

const elemento1 = document.getElementById("mensagem1") 
const elemento2 = document.getElementById("mensagem2") 
const elemento3 = document.getElementById("mensagem3")

elemento1.innerHTML = `Ola esse seria meu ${texto1}!`
elemento2.innerHTML = `Ola esse seria meu ${texto2}!`
elemento3.innerHTML = `Ola esse seria meu ${texto3}!`