// é pra concatenar vários arrays dentro de um só, ou vários elementos

const filhas = ['Valesca', 'Cibalena']
const filhos = ['Washington', 'Wesclei']
const todos = filhas.concat(filhos)
console.log(filhas, filhos, todos) // n vai alterar os arrays, vai ser criado um novo concatenado

const todos_02 = filhas.concat(filhos, 'Fulano') // adicionando outro elemento
console.log(todos_02)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))