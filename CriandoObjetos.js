// usando a notação literal (NÃO É JSON)
let apagar = function () {
    console.log('*****************')
}

const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof Object, typeof new Object) //vai retornar function pro object e object pro new object

const obj2 = new Object
console.log(obj2)
apagar()
// com funções construtoras (constructors)
function Produto(nome, preco, desc) {
    this.nome = nome // o this é pra deixar a variavel pública
    // preco e desconto vão continuar ENCAPSULADOS
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

// instanciando
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log('O Preço com Desconto do Produto 1 é: ',p1.getPrecoComDesconto(), 'O preço do Produto 2 com desconto é: ',p2.getPrecoComDesconto())
apagar()

// com factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30 ) * (30 - faltas)
        }
    }
}

// instanciando
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
//console.log(f1.getSalario)
console.log(`salario de f1 é: ${f1.getSalario()}`, `e de f2 é de: ${f2.getSalario()}`)
apagar()


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
apagar()

// função que retorna objeto (por json)
const fromJSON = JSON.parse('{"info": "sou um json"}')
console.log(fromJSON.info)