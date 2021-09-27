// recurso novo ES2015

const pessoa = {
    nome: 'Bruno',
    idade: '20',
    endereco: {
        logradouro: 'Rua xxdd',
        numero: 1000
    }
}

const { nome, idade } = pessoa // as {} representam o destructuring n um objeto, a gnt vai tirar o nome e a idade da pessoa (= pessoa)
// a linha 12 faz o seguinte: tira de objeto pessoa o nome e idade 
console.log(nome, idade) // vai printar o nome e a idade

const { nome:n, idade:i } = pessoa // faz a msm coisa que a linha 12 e 14
console.log(n,i) // msm print da linha 14

// linha 16 e 17 são só uma maneira diferente das linhas 12 e 14

const { sobrenome, bemHumorada = true } = pessoa  // valor padrão = true
console.log(sobrenome, bemHumorada) // vai imprimir undefined e true

const { endereco: { logradouro, numero, cep}} = pessoa // o endereco: significa que quero pegar do endereco la de cima
console.log(logradouro, numero, cep) // n tem cep entao n imprime ele, undefined

// quando for usar destructuring tem q ter ctz que só o ULTIMO dado tá nulo, só ele pode se não da cagada.