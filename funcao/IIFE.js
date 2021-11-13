// é uma função auto invocada, usada no browser para fugir do escopo global 
// IIFE = Immediately Invoked Function Expression significa "Função auto invocada" 

(function () {
    console.log ('Será executado na hora!') 
    console.log('foge do escopo global, tudo aqui é local') // foge do escopo global
})() // () é o ponto de invocação da função

