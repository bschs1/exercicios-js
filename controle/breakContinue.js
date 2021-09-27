// break serve pra fazer um desvio de fluxo
// break n pode usar em if
// usa em for while e switch
// continue serve em for e while

// EVITAR USAR BREAK

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break    // o break vai agir no bloco que ele tiver mais próximo, no caso o FOR, ele n age no IF
    }            // break n age no IF, ele age no FOR, sai do laço corrente.
    console.log(`${x} = ${nums[x]}`)
}

// o código quando chega no 5 ele parad e executar pq (x == )

for (let y in nums) {
    if( y == 5) {
        continue         // o continue interrompe a repetição atual e vai pra próxima, ele n age no if, vai agir no FOR / WHILE
    }
    console.log(`${y} = ${nums[y]}`)                 // quando chega no indice 5 do array ele pula pro proximo
}

// N USAR RÓTULOS NEM ISSO AKI DA LINHA 26 ~ 31 É FEIOSO

externo: for (a in nums) {              // isso é um rótulo, que eu noemeei externo
    for (b in nums) {
        if (a == 2 && b == 3) break externo         
        console.log(`Par = ${a}, ${b}`)
    }
}


// oq o cod L26~31      ele vai achar o par e usar o BREAK tipo 1.0, 1.1 (1.1 é o parzinho do 1)