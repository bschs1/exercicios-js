let apagar = function () {
    console.log('*****************')
}

// coleção de pares chave/valor (objeto) 
const produto = new Object 
// notações:
produto.nome = 'Cadeira' 
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

// deletando um atributo
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            rua: 'Rua Palanque',
            numero: '110a',
            cep: '08030-110'
        }
    },
    condutores: [{
        nome: 'Bruno',
        idade: 21
    }, {
        nome: 'Amanda',
        idade: 21
    }],
    calcularValorSeguro: function () {
        // pode ter função dentro de um objeto 
    }
}

// acessando atributos
console.log(carro.proprietario.endereco)
console.log('numero: ',carro.proprietario.endereco.numero = '1000') // mudando o numero
// isso seria uma introspecção do objeto, podemos acessar strings assim por ex
console.log(carro['proprietario']['endereco']['rua'] = 'Av Gigante') // mudando a rua
console.log(carro )

//deletando atributos
delete carro.condutores
// tudo abaixo de endereco será deletado
delete carro.proprietario.endereco
delete carro.calcularValorSeguro // pode dletar função tbm
apagar()
console.log(carro)
apagar()
console.log(carro.condutores) // vai dar undefined pq foi deletado
apagar()
//console.log(carro.condutores.length) // agora vai dar erro