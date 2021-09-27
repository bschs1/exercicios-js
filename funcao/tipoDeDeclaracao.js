// normal -> function declaration
// pode chamar uma função antes mesmo dela pq o interpretador do javascript primeiro carrega as funções (dessa forma) dps as chamadas
console.log(soma(3, 4))
// mas usando sub n funciona, pq é expression
//console.log(sub(4,3))

function soma (x, y) { // declara função, dps nome, dps parametros
    return x + y
}

// armazenada na variavel -> function expression
// n pode usar ela antes de declarar, igual a function declaration 
const sub = function(x,y) {
    return x - y
}
console.log(sub(4,3))


//named -> além de ter uma constante armazenando a função ela pode ser nomeada
// é pouco usada
// tb n pode usar antes de declarar
const mult = function mult(x, y) {
    return x * y 
}