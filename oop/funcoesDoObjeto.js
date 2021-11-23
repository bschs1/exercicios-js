const pessoa = {
    nome: 'Bruno',
    idade: 21,
    peso: 145,
}

console.log(Object.keys(pessoa), (Object.values(pessoa)))
console.log(Object.entries(pessoa)) // um array com subarrays de chaves e valores

Object.entries(pessoa).forEach(e => { // fazendo um loop q percorre o array e nos da o resultad
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '20/12/1999'
}) // o 'dataNascimento' precisa das aspas (') pq ele ainda n foi criado 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // fica a data de nascimento original, 20/12/1999
console.log(Object.keys(pessoa))

//object assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // pega o destino (dest) e vai colocando todos pós o primeiro parametro dentro de dest, ele concatena os outros parametros no primeiro

console.log(dest) // sobrescreve o valor de a, era 1 virou 4

Object.freeze(obj)
obj.c = 1234
console.log(obj)