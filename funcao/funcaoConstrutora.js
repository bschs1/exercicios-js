// é tipo a classe de java / c#
// construtora = molde
// usamos métodos, podendo ser privado, publico

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributos privados (escopo da função)
    let velocidadeAtual = 0 // usa let, var, const, usar let se for uma variavel, ngm usa mais var

    // método publico usa-se this
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual =+ delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
    // método privado
    const getNomeCarro = function () {
        return NomeCarro
    }
}

const uno = new Carro // instanciando carro
uno.acelerar() // acelerando 1x (delta = 5)
console.log(uno.getVelocidadeAtual()) // vai retonar 5 pq aceleramos apenas 1 vez

const ferrari = new Carro(350, 20) // instanciando carro, com atributos diferente (vel maxima = 350, e delta = 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function
console.log(typeof ferrari) // objeto