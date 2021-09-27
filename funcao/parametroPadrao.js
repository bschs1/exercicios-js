// estrategia 01 pra gerar um valor padrao
function soma01(a,b,c) {
   a = a || 1
   b = b || 1
   c = c || 1  // as || significa OU
   return a + b + c
}

console.log(soma01()) // sem parametro vai somar a + b + c = 3
console.log(soma01(3)) //  com parametro = 3 vai somar 5, 3(no lugar de'a') + b + c = 5
console.log(soma01(1, 2, 3)) // 1(a) + 2(b) + 3(c) = 6
console.log(soma01(0,0,0)) // n vai considerar o 0 e vai ser a = 1 b = 1 c = 1 entao retorna 3

// estrategia 2, 3 e 4 para gerar valor padrao:

function soma2(a,b,c) {
    a = a !== undefined ? a : 1   // ? chama operador ternário 
    b = 1 in arguments ? b : 1    // essa linha faz o seguinte: existe o segundo argumento, ja q o primeiro é indice 0, então dentro de arguments existe o indice um? se existir pegue o indice de b (1)
    c = isNaN(c) ? 1 : c          // se 'c' for numero pega o valor padrão, se n for vai retornar o valor de 'c'
    return a + b + c
}

console.log(soma2()) // como n tem nd vai retornar usando o valor padrão (1)
console.log(soma2(3)) // vai colocar a = 3, entao irá retornar a(3) + b(1) + c(1) = 5
console.log(soma2(1,2,3)) // vai usar estes valores, retornando 6
console.log(soma2(0,0,0)) // vai retornar 0

// valor padrão do es2015:        // MELHOR FORMA
function soma3(a = 1, b = 2, c = 3) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3)) // a priemira retorna 6, a segunda retorna oito pq a = 3, e a ultima vai retornar 6 pq a = 1, b = 2, c = 3 somando = 6
