// uma função é: executa um processo, dentro de um bloco de chaves {}, a função vai executar tudo dentro do bloco, dando pra reutilizar a função dnv
// é um bloco de código nomeado, tem parametros de entrada (ingredientes).

// funcao sem retorno:
function imprimirSoma(a, b) { // usar nomes bons pra funções
    console.log(a + b)
}

imprimirSoma(2,3) 
imprimirSoma(2) // pode usar 1 só parametro, o resultado vai ser not a number (NaN)
imprimirSoma(2,4,5,6) // pode passar vários vai só vai pegar a e b no caso 2, 4 = 6
imprimirSoma() // sem parametro vai retornar not a number (NaN)

// função com retorno:
function soma(a, b = 0){      // to definindo valor padrão de b (0) (VALOR PADRÃO = N TÁ DEFINIDO USA ELE)
    return a + b
}

console.log(soma(2,3))  // vai usar o 3 no lugar de 0 que foi definido em b
console.log(soma(2)) // 2 + b (0) irá retornar 2
console.log(soma()) // se n tem parametro vai retornar NaN