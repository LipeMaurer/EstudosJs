const numero1 = 1939
const numero2 = 1945
const numero3 = 2026

const elemento1 = document.getElementById("mensagem1") 
const elemento2 = document.getElementById("mensagem2") 
const elemento3 = document.getElementById("mensagem3")

elemento1.innerHTML = `Ola, no ano de ${numero1} se iniciou a guerra!`
elemento2.innerHTML = `Ola, no ano de ${numero2} acabou a guerra!`
elemento3.innerHTML = `Ola, agora estamos no ano de ${numero3}!`