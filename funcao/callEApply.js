function getPreco(imposto = 0, moeda = 'R$') { 
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` // this.preco é o preço do produto atual e this.desc é a porcentagem de desconto do produto atual (this.desc é uma variável global) e imposto é a porcentagem de imposto do produto atual (imposto é uma variável global) 
}

const produto = { // criação de um objeto produto com as propriedades preço e desc (desc é uma variável global)
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 // variável global (preço é uma variável global) 
global.desc = 0.1 // variável global (desc é uma variável global)
console.log(getPreco()) // 18
console.log(produto.getPreco()) // R$ 4589.00 

// agora com call e apply

const carro = {
    preco: 49990,
    desc: 0.20,
}

console.log(getPreco.call(carro)) // R$ 39992 - > preço do carro com desconto de 20% 
console.log(getPreco.apply(carro)) // R$ 39992 - > preço do carro com desconto de 20%

// diferença de call e apply é como o parâmetro é passado

console.log(getPreco.call(carro, 0.17, '$')) // passa diretamente nos parametros do call cada um dos parametros q vao ser passados pra função, primeiro é o contexto e depois os parametros 
// primeiro parametro é o contexto e o segundo parametro é o primeiro parametro da função

console.log(getPreco.apply(global, [0.17, '$'])) //  primeiro o contexto dps um array com os parametros da função 