// factory function SEMPRE retorna um OBJETO

// abaixo é o jeito feio de fazer 

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 45
}

// agora jeitin top

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())