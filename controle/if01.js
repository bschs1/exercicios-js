function soBoaNoticia(nota) {
    if(nota >= 7){ // o bloco {} só vai ser executado se for >= 7
        console.log('Aprovado com: ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(3)

function seForVerdadeEuFalo(valor) {
    if(valor) { // TEM Q SER VERDADEIRO OU FALSO CARALHO
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)