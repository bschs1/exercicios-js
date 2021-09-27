// usando setInterval
/*
function Pessoa() {
    this.idade = 0

    
    setInterval(function()  {        // recebe um intervalo e uma função
       this.idade++ 
       console.log(this.idade)    
    }.bind(this), 1000) // o .bind(this) resolve o problema do NaN
}

new Pessoa // criando objeto // vai retornar NaN
*/

// OUTRO JEITO:

function Pessoa() {
    this.idade = 0

    const self = this // usei SELF
    setInterval(function()  {        // recebe um intervalo e uma função
       self.idade++ // USA-SE SELF
       console.log(self.idade) // SELF    
    }, 1000) // n precisa usar o BIND, pq a variavel self vai apontar pro this e o this pra idade
}

new Pessoa // criando objeto // vai retornar NaN

