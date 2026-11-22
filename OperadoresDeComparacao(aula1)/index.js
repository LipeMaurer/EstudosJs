//
// > Maior que 
// < Menor que
// >= Maior ou igual a que
// < Menor ou igual a que
// == Igualdade (valor)
// === igualdade estrita (valor e tipo)
// != diferente (valor)
// !== diferente estrito (valor e tipo)
//

const  maiorQue = 10 > 5
const  menorQue = 5 < 10
const  maiorIgual =  10 >= 5
const  menorIgual = 5 <= 10
const  igualdade = '1' == '1'
const  igualdadeEstrita = 'a' === 'a'
const  diferente = 1 != 2
const  diferenteEstrito = 1 !== 'a' 

if (maiorQue == true) {
    console.log ("E maior que 5")
}

if (menorQue == true) {
    console.log ("E menor que 10")
}
if (maiorIgual == true) {
    console.log ("E maior ou igual que 5")
}
if (menorIgual == true) {
    console.log ("E menor igual que 5")
}
if (igualdade == true) {
    console.log ("E igual a 1")
}
if (igualdadeEstrita == true) {
    console.log ("E igual e do mesmo tipo")
}
if (diferente == true) {
    console.log ("Os numeros sao diferentes")
}
if (diferenteEstrito == true) {
    console.log ("E diferente de tipo e conteudo")
}





