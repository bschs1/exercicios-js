// callback = chamar de volta
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) { 
    console.log(`${indice + 1}. ${nome}`) // template string
}

fabricantes.forEach(imprimir) // for each é uma função de fabricantes, e fabricantes é um array, pra cada elemento do array ele vai chamar a função imprimir
fabricantes.forEach(function (fabricante) { // podemos tb criar uma função pra saber so o nome dos fabricantes
    console.log(fabricante)
})