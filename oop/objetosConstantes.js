// pessoa > vai pra um endereço de memoria, neste exemplo seria 123, e esse endereço aponta pro objeto
const pessoa = {nome: 'Joao'} // constante ainda aponta pro mesmo lugar de memoria, constante n está ligada com o q está escrito esim com o endereço de memroai (entendi isso pelo menos)
pessoa.nome = 'Pedro'
console.log(pessoa) 

// Pessoa recebe um novo objeto e este objeto tá pro endereço 456 e este endereço aponta pra um novo objeto
// Tentando fazer Pessoa apontar pra 123 e sim pra 456 só que como é constante ela sempre apontará pro 123
//pessoa = { nome: 'Ana' }
//console.log(pessoa)

//object freeze
Object.freeze(pessoa) // congelando o objeto pessoa voce n pode mais mudar
pessoa.nome = 'Maria'
console.log(pessoa) // vai retornar pedro pq está congelado
// n adianta nem colocar mais nada ou tentar deletar n vai funcionar pq O OBJETO ESTÁ CONGELADO
