// JSON X Objeto
// JSON é um formato de DADOS, n tem função
// JSON é pra conversar entre sistemas  

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma () {
        return a + b + c
    }
}
// transforamndo em JSON
console.log(JSON.stringify(obj)) // retorna o objeto, a função é excluida pq o JSON é um formato de DADOS, não é executável 

// JSON pra objeto:
// nome de atributo tem que ter aspas duplas 
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) tá errado
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) ERRADO TBM CARAIO TOMA NO CU TIU brinks rs
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // agora está certo!

console.log(JSON.parse)