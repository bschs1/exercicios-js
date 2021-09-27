// pouco usada
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min  
    return Math.floor(valor)
}

let opcao = 0

do {  // DO de DO WHILE
    opcao = getInteiroAleatorioEntre(-1, 10) // 
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // o WHILE VEM DPS

console.log('Até a proxima')

//