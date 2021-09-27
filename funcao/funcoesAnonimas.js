const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x,y) { // retorna -1, esse tipo de estrutura é mtu comum no javascript
    return x - y
})

imprimirResultado(3,4, (x,y ) => x * y) // agora com arrow function

const pessoa = {
    falar: function() { // podemos colocar uma função anonima no próprio objeto
        console.log('Falando, OPA!')
    }
}

pessoa.falar