// importando global
require("./global"); //dps de fazer isso n precisa fazer mais em nenhum arquivo pra importar

console.log(MinhaApp.saudacao());

MinhaApp.nome = "Eita!"; // é mtu perigoso ter coisas globais, pq imagina um módulo besta qlqr muda uma coisa importante, monkaS
console.log(MinhaApp.nome); // uma solução pra n acontecer isso de mudar é freezar o objeto global lá no módulo dele, global.MinhaApp = object.freeze
