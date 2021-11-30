// o array é um Objeto
// é heterogenia, pode ter varios tipos de dados dentro de um array
// a boa prática diz que é bom deixar cada array com um determinado tipo, deixar ele homogeneo mesmo.

console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // retorna undefined pq ele só possui 3 elementos

aprovados[3] = 'Paulo' // adicionando novo elemento dentro do array
console.log(aprovados[3])

aprovados.push('Abia') // add novo elemento

console.log(aprovados.length)

aprovados[9] = 'Rafael' // podemos add em um elemento n linear, mas do indice 4 por ex q foi o ultimo preenchido até elemento 9 rafael, vão ficar undefined
console.log(aprovados[9])

console.log(aprovados) // vai mostarr que tem 4 items vazios

console.log(aprovados.sort()) // ordenando o array

delete aprovados[1]

console.log(aprovados[1]) // como foi deletado vai retornar undefined
console.log(aprovados[2]) // n foi reordenado, bia continua índice 2

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // serve pra adicionar ou remover elementos de um array, ou os dois ao mesmo tempo, a sintaxe é: primeiro parametro é o índice que queremos trabalhar, e vai até o elemento que falamos
console.log(aprovados) // alteramos os índicess 1 e 2 por elemento 1 e elemento 2 respectivamente

//revisar como é a sintaxe de splice !!!!!!!!!!!!!!!!!
