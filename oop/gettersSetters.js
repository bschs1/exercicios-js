const sequencia = {
    _valor: 1, // o UNDERLINE é uma CONVENÇÃO pra dizer que a variavél é privada
    get valor() { return this._valor++ }, 
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

// acessando pelo get e set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)