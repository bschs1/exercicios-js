class Pessoa { 
    constructor(nome) { // método construtor da classe Pessoa 
        this.nome = nome; // atributo nome da classe Pessoa 
    }

    falar() { // método falar da classe Pessoa 
        console.log(`Meu nome é ${this.nome}`); // precisa do this para acessar o nome da pessoa que está sendo instanciada no momento da chamada da função falar.
    }
}

const p1 = new Pessoa('Bruno'); // instanciando a classe Pessoa com o nome Bruno e armazenando na variável p1 (pessoa 1) 
p1.falar(); // chamando a função falar da classe Pessoa e passando o nome da pessoa que está sendo instanciada no momento da chamada da função falar. 

const criarPessoa = nome => {
    return { // retornando um objeto
        falar: () => console.log(`Meu nome é ${nome}`) // função falar que retorna o nome da pessoa que está sendo instanciada no momento da chamada da função falar.
    }
}

const p2 = criarPessoa('Pijas'); // instanciando a classe Pessoa com o nome Pijas e armazenando na variável p2 (pessoa 2)
p2.falar(); // chamando a função falar da classe Pessoa e passando o nome da pessoa que está sendo instanciada no momento da chamada da função falar.