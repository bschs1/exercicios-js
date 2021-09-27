// O THIS DA ARROW FUNCTION É ASSOCIADO AO CONTEXTO EM Q A FUNÇÃO FOI E S C R I T A

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true é global (no node, no browser é window)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // agora vai dar falso
comparaComThis(obj) // true, funciona pro caisa do BIND

// agr em arrow function:
let comparaComThisArrow = param => console.log(this === param)
// linha 13 n aponta pro global, pq é dentro de um MÓDULO do NODE
// então o contexto léxico seria o próprio módulo em si
comparaComThisArrow(global) // n é global
comparaComThisArrow(module.exports) // é

// bind dentro de uma função arrow

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
// A ARROW FUNCTION É MAIS FORTE Q BIND. RESULTADO FALSO.
// sexo qweqweaaa
//q sexo anal