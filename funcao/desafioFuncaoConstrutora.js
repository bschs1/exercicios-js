class Pessoa {
    constructor(nome) { // método construtor da classe Pessoa que recebe o nome da pessoa como parâmetro e armazena na variável nome da classe Pessoa 
        this.nome = nome
    }

    falar() { // método falar
        console.log(`Meu nome é ${this.nome}`) // this.nome é o nome da pessoa
    }
}

const p1 = new Pessoa('João') // criando apartir do constructor



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João') // criando apartir da factory function (função que retorna um objeto)