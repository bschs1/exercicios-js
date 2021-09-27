function tratarErroELancar(erro) {
    //throw new Error('...') // ta comentado mas ja funciona o erro, 
    //throw 10
    //throw true
    //throw 'mensagem'
    throw { // lança o erro, THROW é por isso, pode mostrar oq eu quiser
        nome: erro.name,    // nome do erro
        msg: erro.message,  // msg do erro
        date: new Date      // a data
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e) // vai executar a função la em cima.
    } finally { // vai ser sempre executado, a msg final 
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

// NÃO MOSTRAR MSG EM INGLES PRA GNT Q N SABE, NEM MOSTRAR ERROS MTU ESPECIFICOS