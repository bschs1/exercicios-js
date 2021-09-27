// undefined serve p limpar variaveis também

let valor // não inicializada
console.log(valor)

valor = null // n tem valor, ausencia de valor
console.log(valor) 
// console.log(valor.toString) // vai dar erro

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar usar undefined, deixa pra linguagem usar
console.log(!!produto.preco) // condição lógica
console.log(produto)
// delete.produto.preco = // vai deletar
console.log(produto)

produto.preco = null // isso deixará sem preço, preço 0
console.log(!!produto.preco) // falso
console.log(produto) // preço nulo
