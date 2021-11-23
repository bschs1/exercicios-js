const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //n pode add mais nada, só alterar, pois é constante
pilotos.pop() // remove o ultimo
console.log(pilotos) 

pilotos.push('Verstappen') // add no ultimo elemento
console.log(pilotos)

pilotos.shift() // é tipo o pop só que o shift tira da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // é o push só que no primeiro elemento
console.log(pilotos)

//splice pode add e remover elementos
// adicionando:
pilotos.splice(2, 0, 'Bottas', 'Massa') // o 2 serve pra dizer o índice, o 0 significa que não está removendo nada
console.log(pilotos)
//removendo:
pilotos.splice(3, 1) // o 3 quer dizer o índice que vamos remover (massa), e o 1 o número de remoções
console.log(pilotos)

//SLICE gera um novo array
const algunsPilotos1 = pilotos.slice(2) // novo array, ele pega do índice que colocamos ali (2), até o final do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // vai pegar do índice 1 até o índice 3, é q nem python o ultimo n vai e blabla
console.log(algunsPilotos2)