//n é de true or false é de valores
// múltiplas seleções 
// break serve pra fazer um desvio de fluxo

const imprimirResultadoA = function (nota) {
    switch (Math.floor(nota)) {                 
        case 10:
            console.log('Quadro de Honra')      // se for 10 vai executar essa linha
        case 9:                                 // se for 9 vai executar essa linha

    }
}

const imprimirResultadoB = function (nota) {
    switch (Math.floor(nota)) {                 
        case 10:
        case 9:                                              
            console.log('Quadro de Honra')    //L12,L13 ->> o switch considerará o log pra case 10 e 9 nessa sintaxe aki                                               
            break // o break aqui serve pra que o switch n execute todos q tão abaixo do primeiro no caso, o case 9
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3, 2, 1, 0:                    // OUTRA SINTAXE, MAIS SIMPLIFICADA AINDA
            console.log('Reprovado')        // pra todos vai sair o reprovado.
            break
        default:                                // é o else
            console.log('Nota inválida')
    }
    console.log('fim!')    //vai colocar um fim dps do switch, entao a cada bloco de cód vai aparecer fim
} 
imprimirResultadoB(10)
imprimirResultadoB(9)
imprimirResultadoB(7)
imprimirResultadoB(5)
imprimirResultadoB(2)

imprimirResultadoB(3.5)      // VAI DAR NOTA INVALIDA, PQ A SINTAXE SIMPLIFICADA N SUPORTA ISSO.