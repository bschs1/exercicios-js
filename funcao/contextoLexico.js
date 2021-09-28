const valor = 'Global' // escopo global

function minhaFuncao() {
    console.log(valor)
} 

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // retorna global, a função procura primeiro no local, dps vai pro global
