// é baseada em protótipo
// prototipo é o pai, e assim em diante, pai, avô e etc, se não achar o atributo ele vai se tornar UNDEFINED
// o atributo prototype só está disponível dentro de uma função
// [[prototype]] != prototype, são diferentes
// um objeto em javascript tem uma referência pro seu protótipo, assim que o javascript define herança

const ferrari = {
    modelo: 'F40',
    velMax: 324,
    
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
    
}

console.log(ferrari.proto) // retorna undefined
console.log(ferrari.__proto__) // os 2 underlines q servem pra acessar quem é o protótipo (super objeto, objeto pai), ou seja, se n achar em ferarri ele vai buscar dentro do protótipo
console.log(ferrari.__proto__ === Object.prototype) // o === significa EXTRITAMENTE igual
console.log(volvo.__proto__ === Object.prototype) // o que estamos fazendo com Object.prototype é apontar extritamente pro prototype de objeto
console.log(Object.prototype.__proto__) // retorna null

function meuObjeto() {}

console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype) 