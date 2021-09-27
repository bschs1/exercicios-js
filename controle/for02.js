// for in
// SEMPRE USAR LET dentro do q o laço vai fazer, pra n tomar global essa porra
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {              // pra cada indice da nota ele vai devolver certinho
    console.log(i, notas[i])    // acessando as notas pelo array
}

// agr com objeto

const pessoa = {
    nome: 'ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 59
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//o cod das linhas 11 até a 20, ele faz a msm coisa q no bloco anterior e corre pelos atributos da pessoa

console.log()