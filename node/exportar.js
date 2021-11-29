console.log(module.exports === this) // o module exports aponta pra this, por isso podemos exportar com o this
console.log(module.exports === exports) 

this.a = 1 // podemos exportar o valor de a pra outros módulos (arquivos)
exports.b = 2
module.exports.c = 3 

//observação: mesmo atribuindo nullo na exports o exports vai continuar apontando pro mesmo objeto, a = 1, b = 2, c = 3
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste',

}

console.log(module.exports) // contionua apontando pra a=1,b=2,c=3, 

//forma correta
module.exports = {
    nome: 'Teste',

}

console.log(module.exports)