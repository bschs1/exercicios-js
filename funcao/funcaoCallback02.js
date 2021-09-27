const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// extraindo notas < 7:
// sem callback
const notasBaixas01 = [] // array vazio
for (let i in notas) { //
    if (notas[i] < 7 ) { // variavel [i] vai percorrer notas
        notasBaixas01.push(notas[i])  // e vai colocar(push) todas notas < 7
    }
}

console.log(notasBaixas01)

// com callback
const notasBaixas02 = notas.filter(function (nota) {// vai retornar true or false, true vai entrar pro array, false vai ser excluido do array, detalhe ela não interfere no array original(notas) e sim no notasBaixas
    return nota < 7 // o filtro
}) 

console.log(notasBaixas02) // o mesmo array de cima de uma forma mtu melhor

// com arrow function

const notasBaixas03 = notas.filter(nota => nota < 7) 
console.log(notasBaixas03) // o mesmo array agora com arrow function