// callback = chamar de volta
// A callback is a function passed as an argument to another function.


const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) { 
    console.log(`${indice + 1}. ${nome}`) // template string
}

fabricantes.forEach(imprimir) // for each é uma função de fabricantes, e fabricantes é um array, pra cada elemento do array ele vai chamar a função imprimir
fabricantes.forEach(function (fabricante) { // podemos tb criar uma função pra saber so o nome dos fabricantes
    console.log(fabricante) // o evento é o loop, quando ele encontra um elemento(nesse caso fabricante) ele chama a função callback passando o elemnto em si e o indice 
}) 

// os forEach -> é o evento que chamará a função