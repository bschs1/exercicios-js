// 

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Bruno',
        nota: 8.1,
    }, {
        nome: 'Calvodino',
        nota: 9.3,
    }] 
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Koltira',
        nota: 8.1,
    }, {
        nome: 'IvoryKing',
        nota: 6.9
    }]
}]

// extraíndo as notas

const getNotaAluno = aluno => aluno.nota // extraíndo a nota do objeto aluno
const getNotasTurma = turma => turma.alunos.map(getNotaAluno) // utilizanmos o map pra converter objetos do tipo aluno pra apenas a nota do aluno (getNotaAluno)

const notas1 = escola.map(getNotasTurma) // o metodo getNotasTurma vai varrer cada uma das turmas já que escolas é um array de turmas, dentro do map e turmas quero extrair as notas
console.log(notas1)

// agora quero colocar todas as notas de todos alunos de todas as turmas em um array:
// usando o concat:
console.log([].concat([ 8.1, 9.3 ], [ 8.1, 6.9 ] ))

// usando flatmap

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)