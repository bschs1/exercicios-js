// Closure é o escopo criado quando a função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação

const x = 'Global' // variável global 

function fora() { // função fora do escopo global 
    const x = 'Local' // variável local 
    function dentro () { // função dentro do escopo global 
        return x 
    }
    return dentro
}

const minhaFuncao = fora() // minhaFuncao recebe a função fora 
console.log(minhaFuncao()) // imprime a função dentro do escopo global 