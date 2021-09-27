console.log(Math.ceil(6.1)) // ceil é pra arredondar p cima

const obj1 = {}
obj1.nome = 'Pijas'
// obj1.['nome'] = 'Bola2' // ele substitui o nome q tava antes no caso pijas
console.log(obj1.nome)

function Obj(nome)  {
    this.nome = nome // o 'this.nome' serve pra receber o parametro (nome), e vai tornar a função PÚBLICA, usei ela lá em baixo
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

// o que o código acima fez foi  o seguinte, ele tem o parametro nome certo?! entao:
// ali em baixo eu defini duas variaveis (obj2 e obj3), e usei a notação (obj2.nome)
// serve pra acessar objetos, nomes de dentro de uma função fora dela