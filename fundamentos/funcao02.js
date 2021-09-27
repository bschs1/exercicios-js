// armazenar função em variável:
const imprimirSoma = function (a, b)  { // função sem nome 
    console.log(a + b)
}

imprimirSoma(3,4)

// armazenando uma funcao arrow em uma variavel:
const soma = (a, b) => { // essa => é a arrow
    return a + b
}

console.log(soma(3,4))

// retorno implícito, (n precisa usar return):
const subtracao = (a,b) => a - b // é uma função de uma linha só, vai retornar a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a) // um único parâmetro
imprimir2('Legal!!') 

// dps ele vai explicar melhor oq é arrow function mas basicamente:
// arrow function é uma função pequenininha de uma linha q retorna algo