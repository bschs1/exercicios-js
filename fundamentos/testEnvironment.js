function soma2(a,b,c) {
    a = a !== undefined ? a : 1   // ? chama operador ternário 
    b = 1 in arguments ? b : 1    // essa linha faz o seguinte: existe o segundo argumento, ja q o primeiro é indice 0, então dentro de arguments existe o indice um? se existir pegue o indice de b (1)
    c = isNaN(c) ? 1 : c          // se 'c' for numero pega o valor padrão, se n for vai retornar o valor de 'c'
    return a + b + c
}

console.log(soma2())
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))