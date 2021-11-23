// object.preventExtensios ->

const produto = Object.preventExtensions( {
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
})

console.log('Extensível:', Object.isExtensible(produto)) // testando pra ver se ele é extensível

//voce pode alterar dados, excluir dados, mas n pode add novos atributos
produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//object.seal = n pode add novos atributos, nem excluir, mas consegue modificar os valores

const pessoa = {
    nome: 'Juliana',
    idade: '35'
}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

