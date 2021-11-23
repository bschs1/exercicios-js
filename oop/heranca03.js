const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'

}

const filha1 = Object.create(pai) // cria o objeto filha tendo como protótipo o objeto pai
filha1.nome = 'ANA'
console.log(filha1.corCabelo) // vai retornar preto pq o object.create é o objeto que voce passou como paraemtro, no caso pai

const filha2 = Object.create(pai, {
    //colocando parametros da filha2
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // n alterou pq o writable está falso
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // n definimos cor do cabelo mas o javascript encontra o do pai, pq object.create(pai) é o protiotipo

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) // aparece pq enumerable = true

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // se pertencer a ela:         Ou se veio por herança
        console.log(key) : console.log(`Por Herança: ${key}`) //veio por herança
}