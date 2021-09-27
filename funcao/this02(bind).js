// usando bind

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)   // to acessando o atributo de um objeto (saudação -> atributo, do objeto -> pessoa) 
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()   // VAI DA MERDA (UNDEFINED) // conflito entre paradigmas: funcional e Objected Oriented Programing

const falarDePessoa = pessoa.falar.bind(pessoa) // a função bind vai utilizar o THIS PRA PESSOA.
falarDePessoa() //agr aponta pro lugar certo (saudacao)

const falar2 = pessoa.falar
falar2()

// Linhas 18 e 19 n funcionam pq n tem bind, n ta apontando pro lugar certo
// o bind serve pra apontar a função pro lugar certo por meio de parametro
// como na linha 16, passou o parametro (pessoa)