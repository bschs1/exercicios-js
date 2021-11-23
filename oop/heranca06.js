// o operador NEW vai apontar pra função aula.prototype

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1,aula2)

// simulando new
function novo(f, ...params) {
    const obj = {} // n pode usar new pq estamos simulando
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    return obj
}
// a função novo, simula o que o NEW faz


const aula3 = novo(Aula,'Bem vindo', 123)
const aula4 = novo(Aula,'Até breve', 456)
console.log(aula3, aula4)