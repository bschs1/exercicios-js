// par nome / valor
const saudacao = 'Ola' // contexto léxico01 (local onde a variável foi definida no código)
// saudação = nome    'ola' = valor
 // uma função por ex: é um contexto de um código

 function exec()    {
     const saudacao = 'Falaaaa' // contexto léxico02
     return saudacao
 }

 // o saudacao do contexto léxico 01 é diferente do da 02, pra n dar conflito

const cliente = {
    nome: 'Bruno',
    idade: 20,
    endereco: {
        logradouro: 'Rua palanque',
        numero: 110,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
