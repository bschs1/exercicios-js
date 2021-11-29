const alunos = [ 
    {nome: 'Bruno', nota: 7.3, bolsista: false},
    {nome: 'Calvodino', nota: 9.2, bolsista: true},    
]

// calculando média

// imperativa:
// deste modo é um passo a passo, e como realizar o passo a passo
let total1 = 0 //vou acomumular os valores nela
for (let i = 0; i < alunos.length ; i++) {
    total1 += alunos[i].nota // percorrendo cada um dos alunos pegando o índice dele, a nota e acrescentando.
}

console.log(total1 / alunos.length) //a média

// declarativa:
const getNota = aluno => aluno.nota // função que pega apenas a nota do aluno
const soma = (total, valorAtual) => total + valorAtual
const total02 = alunos.map(getNota).reduce(soma) //o map, vai fazer um novo array usando a função get nota (pegar a nota), o reduce vai reduzer baseado na soma, a agregação como parametro soma
console.log(total02 / alunos.length)

// é melhor usar o modo declarativo, ele pode ser reutilizado, já o modo imperativo não é mtu feito pra ser reutilizavel

//exemplo vida real: Imperativo = ensinar o passo a passo pra alguem sem deixar passoa algum faltando
//ao invez de dizer: "arruma a mesa da sala" ele diz "pegue a toalha branca, coloque o prato azul em tal lugar e bla blabla, bem instrutivo." O FOCO É COMO TEM QUE SER FEITO, NÃO O QUE TEM Q SER FEITO, SIM COMO DEVE SER FEITO
// exemplo vida real: Declarativo = Voce simplesmente diz o que tem que ser feito e internamente já é feita
// analisando o cod declarativo:
// agregamos tudo apartir da soma, e extraimos o objeto a nota, utilizamos o reuso por meio de funções pequenas e especialistas, e a forma de codar é mais limpa?