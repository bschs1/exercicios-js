// btw objetos aqui são diferentes em JSON 
const prod1 = {} // o par de {} representa OBJETOS
// objeto linha 1 = vazio, podendo definir o que ele vai ser dps
 prod1.nome = 'Celular ultra mega' // demos o nome da variavel
// objetos sempre são {} e depois VALOR
//pode ter objetos dentro de objetos, tipo um produto ai vem uma categoria
// objetos são {} e valor (chave e valor)
prod1.preco = 4998.90.toFixed(2) // trunquei 2 casas pq sim idai 
prod1['desconto legal'] = 0.4 // evitar nomes com espaços

console.log(prod1) // { nome: 'Celular', preco: 4998.9 } --> o que sairá no print


const prod2 = {
    nome: 'camiseta',
    preco: 90.00 // não pode usar ç lolol
}


console.log(prod2)