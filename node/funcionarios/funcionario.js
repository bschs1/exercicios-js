// experiência backend
// axios é um client http, ele faz requisições de algo remoto
// usaremos o axios pra pegar o json

//NÃO CONSEGUI FAZER

//o prof utilizou, filter, reduce -> revisar


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China' // arrow function extraindo o pais china
const mulheres = f => f.genero === 'F'   // arrow function extraíndo o genero Feminino
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual // o ? significa entao retorne e o : é Caso contrario retorne o funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // agora função pra pegar mulher chineas com menor salário

    const func = funcionarios
        .filter(chineses) 
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})