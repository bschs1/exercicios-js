function soma() {       // n tem parametro mas posso passar como arguments
    let soma = 0
    for (i in arguments) {     // arguments são arrays internos da função
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // valor 0
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3.toFixed(2))) // vai somar todos os parâmetros
// daqui pra baixo fica meio trolhos
console.log(soma(1.1, 2.2, 'teste')) //vai concatenar o teste 
console.log(soma('a', 'b', 'c')) //vai printar 0abc, 0 pq a variavel soma = 0
qwe