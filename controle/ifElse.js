const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(3)
imprimirResultado('Epa!') // javascript é fracamente tipada, então ele considera a string e da merda