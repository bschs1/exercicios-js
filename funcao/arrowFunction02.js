// o this na função arrow É O CONTEXTO q a função foi escrita
// n é influenciado pelo local q ela é chamada.

function Pessoa () {
    this.idade = 0

    setInterval(() => {         // o this n varia por quem chama.
        this.idade++
        console.log(this.idade)

    }, 1000)
}

new Pessoa