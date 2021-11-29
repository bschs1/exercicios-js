// o map serve pra fazer um mapeamento do array pra um array do mesmo tamanho só que com dados transformados
// ex um array com array 1 =[1,2,3] transformando ele em um array com 3 elementos no qual cada um dos elementos seja o dobro do array original array 2 = [2,4,6]
// pode ser um obj transformado em um numero, um json transformado em objetos e etc
// map = pra transformar um array em outro
// regra se o array original tem 6 elementos pós mapeamento ele vai continuar com 6 elementos, se o array original tiver x elementos o mapeado vai ter x elementos tbm

const nums = [1, 2, 3, 4, 5] // array original

// utilizando map, (map tem um for dentro dele)
 // a função callback .map ela pode receber 3 parametros, o próprio valor atual, o índice e o array completo
let resultado = nums.map(function(e) {
    return e * 2 // retornará o array * 2 
}) 

console.log(resultado) // [ 2, 4, 6, 8, 10 ]

//
const soma10 = e => e + 10 // arrow function pra somar +10 
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // O ${}É pra colocar interopolar uma variavel, essa função é pra transformar o dimdim pra real

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)