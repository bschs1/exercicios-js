// é um vetor, serve pra agrupar várias variaveis, é uma estrutura linear(um valor atrás do outro)
// acessa os elementos por números, começa do 0 até sla quando
// é heterogênio (pode colocar qlqr tipo de variavel), n tem tamanho fixo
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // como n tem 4 dará undefined

valores[4] = 10 // colocamos um novo elemento, 10
console.log(valores)
console.log(valores.length) // saber o tamanho do array

valores.push({id: 3}, false, null, 'teste') // n é bom misturar as coisa pq vira bagunça
console.log(valores)

console.log(valores.pop()) // retira o último valor do array no caso 'teste'
delete valores [0] // remove o elemento [elemento] do array
console.log(valores)

console.log(typeof valores) // saber o tipo do array: objective