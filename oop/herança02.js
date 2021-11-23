// cadeia de prototype

Object.prototype.atributo0 = 0 // agora criamos o atributo 0 = Z, ele vai achar pq mesmo q em filho e pai n tem, o avô aponta pra object.prototype
// LINHA 3 É RUIM N FAZER NUNKKKKKKKKKKAAAAAA

const avo = {
    atributo1: 'A'
}

const pai = {
    __proto__: avo, // dizendo pro javascript procurar no avo o que o pai n ter
    atributo2: 'B'
}

const filho = {
    __proto__: pai,
    atributo3: 'C'
}

console.log(filho.atributo1) // como filho n tem atributo 1, ele vai procurar no pai, como pai n tem ele vai procurar no avo
console.log(filho.atributo0) // vai achar pq agora criamos o atributo 0 = Z, ele vai achar pq mesmo q em filho e pai n tem, o avô aponta pra object.prototype
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3) 
//detalhe imoportante, mesmo que por exemplo, outros objetos podem ter o mesmo nome de atributo, mas quando vc chamar ele vai encontrar o mais próximo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual =+ delta 
        } else {
            this.velAtual = this.velMax
        }
   },
   status() {
       return `${this.velAtual} Km/H de ${this.velMax} Km/H`
   }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing, sobreia o atributo do objeto principal (carro)
     
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // o super é pra n chamar o this de forma recursiva, o super é pra chamar o do prototipo
    }
}

// estabelecendo a relação de protótipo

Object.setPrototypeOf(ferrari, carro) // estabelecendo a relação, ferrari tem o CARRO como seu protótipo
Object.setPrototypeOf(volvo, carro) // mesma coisa


console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) // chamando o metodo pra acelerar mais e o valor
console.log('a Velocidade do volvo é: ', volvo.status()) // chamando o metodo pra mostrar o quanto acelerou

ferrari.acelerarMais(300)
console.log('A velocidade da Ferrari é: ',ferrari.status())

