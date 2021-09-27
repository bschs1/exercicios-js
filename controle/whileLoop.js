// famoso loop né, loop condicional
// loop pra quantidades indeterminadas

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min  // o random gera um valor de 0 e 1
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // precisa ser ou verdadeira ou falsa, pra continuar o loop, ele vai loopar até trocar de vdd pra falso
    opcao = getInteiroAleatorioEntre(-1, 10) // ele quer achar o -1, e o range é 10
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima')

