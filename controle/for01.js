// while é determinada de repetições
// for 

let contador = 1 // declaração
while(contador <= 10) { // expressão
    console.log(`contador = ${contador}`) 
    contador++ // encremento
}

// o msm código em FOR

for(let i = 1; i <= 10; i++ ) {                  // o ; serve p separar
    console.log(`i = ${i}`)
}

// com array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {            // o i sempre vai 1 a menos q o array pq ele começa do 0
    console.log(`notas = ${notas[i]}`)
}

// o código das linhas 17~20 serve pra loopar com uma condição (i < notas) pelo array todo