// desafio 01!
// retornar true or false respondendo a pergunta: "Todos Alunos são bolsistas?!"
// criar uma função reduce que vai dizer se os alunos da lista são bolsistas ou não

// desafio 02!
// Pergunta: "Algum aluno é bolsista?"
// criar uma função reduce que vai responder a pergunta, criar um map que vai transformar o objeto aluno pegando apenas o atributo bolsista dai vai ter um
// um array com booleanos que devemos aplicar uma logica dizendo se todos elemtnso sao bolsistas ou nn

const alunos = [ 
    {nome: 'Bruno', nota: 7.3, bolsista: false},
    {nome: 'Calvodino', nota: 9.2, bolsista: true},
    {nome: 'Dudsz', nota: 9.8, bolsista: false, pobre: true},
    {nome: 'koltira', nota: 8.7, bolsista: true, pobre: true}
]

const bolsista = ehpobre => ehpobre.bolsista
console.log(alunos.filter(bolsista))

// RESPOSTA 
// DESAFIO 01
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // && = E
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// DESAFIO 02
const algumBolsista = (resultado, bolsista) => resultado || bolsista // || = OU
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))