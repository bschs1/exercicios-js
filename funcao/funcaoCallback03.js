// exemplo de callback no BROWSER
document.getElementsByTagName('body')[0].onclick = function (e) { // acessando o body, e o índice [0], onclick = no click, chanma a funcao que retorna 'o evento ocorreu!'
    console.log('O evento ocorreu!')
} 