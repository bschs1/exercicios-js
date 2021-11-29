// outra forma de percorrer o array
// o reduce é uma função pra transformar o array em um único elemento (transformar um array em outro array, um array em uma string, um array em um número)
// parametro acomuladod e chamada em chamada que vai sendo passado
// o resultado de uma função reduce é passado pra próxima interação
// parametros: callback, valor anterior (retornado da ultima chamada do callback, OU VALOR INICIAL(na primeria chamada)), valor atual, índice e por último o array
// reduce tem a ideia de AGREGAR os valores

/*const alunos = [ 
    {nome: 'joao', nota: 7.3, bolsista: 'true'},
    {nome: 'maria', nota: 9.2, bolsista: 'true'},
    {nome: 'pedro', nota: 9.8, bolsista: 'true'},
    {nome: 'ana', nota: 8.7, bolsista: 'true'},
]*/


const alunos = [ 
    {nome: 'Bruno', nota: 7.3, bolsista: false},
    {nome: 'Calvodino', nota: 9.2, bolsista: false},
    {nome: 'Dudsz', nota: 9.8, bolsista: true, pobre: true},
    {nome: 'koltira', nota: 8.7, bolsista: true, pobre: true}
]

// function normal
/*
const resultado =  alunos.map(function(a){
    a.nota.reduce(function(acomulador, atual) {
        console.log(acomulador, atual)
        return acomulador + atual
    })
})
*/


// com arrow function:
const resultado =  alunos.map(a => a.nota).reduce(function(acomulador, atual) {
    console.log(acomulador, atual) // a esquerda = acomulador, e a direita o elemento atual
    return acomulador + atual
})
// retorna isso: 7.3   9.2       como n passei valor inicial nos parametros o JS automaticamente passou o elemento 0 e 1, o 0 como acomulador e 1 como atual
//               16.5  9.8       ou seja o resultado é a soma (7.3 + 9.2 = 16.5, 16.5 vira o acoumalador)
//               26.3  8.7       somou (16.5 + 9.8 = 26.3)

console.log('********************')
console.log('resultado1 : ', resultado)
console.log('********************')

// se eu quissese passar um valor inicial seria assim:
const resultado2 =  alunos.map(a => a.nota).reduce(function(acomulador, atual) {
    console.log(acomulador, atual) // a esquerda = acomulador, e a direita o elemento atual
    return acomulador + atual
}, 10) //valor inicial, poderia ser um array, colocando um array a cada interação sla

console.log('********************')
console.log('resultado2 : ', resultado2)
console.log('********************')