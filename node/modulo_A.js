// o que é escrito dentro do módulo ele fica meio que private, pra usar ele em outro arquivo preciamos exportar ele e importar ele em outro arquivo
// pra exportar this.ola = fala pessoal!, ou exports.bemvindo = 'bem vindo ao node'
// apenas o que está exportado vai aparecer para outros módulos, coisas locais permanecem aqui

// 3 modos de exportar
this.ola = 'Fala Pessoal!'
exports.bemVindo = 'Bem vindo Pessoal!'      //Linha 4 e 5 são objetos
module.exports.ateLogo = 'Até o próximo exemplo'     
