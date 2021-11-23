// pra percorrer os índices dentro do array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// uma callback function que a cada novo elemento percorrido no array irá ser chamada passando o elemento e o índice
aprovados.forEach(function(nome, indice, array) { // primeiro parametro: proprio elemento, segundo parametro: índice do elemento
    console.log(`${indice + 1}) ${nome}`)   // a execução é a seguinte: o forEach, tem um laço for que percorre o array(aprovados), quando ele encontrar o 1 elemento (agatha nesse caso) e o índice dela, e assi mpor diante
    console.log(array)   // a execução é a seguinte: o forEach, tem um laço for que percorre o array(aprovados), quando ele encontrar o 1 elemento (agatha nesse caso) e o índice dela, e assi mpor diante
} ) //  IMPORTANTE: sempre tem dois parametros, o NOME e o INDICE, o ÍNDICE sempre é SEGUNDO PARAMETRO
    //  IMPORTANTE, PODE TER UM TERCEIRO PARAMETRO, O ARRAY

// agora sem parametro
aprovados.forEach(nome => console.log(nome)) // msm função de cima só q sem índice e mais fácil.

//colocando a função em uma variavel
const exibirAprovados = aprovado => console.log(aprovado)
// colocando a função acima em um forEach
aprovados.forEach(exibirAprovados)
