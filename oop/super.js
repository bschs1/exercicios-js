//O super é bem simples, basicamente ele é utilizado para que possamos acessar o objeto (ou classe) pai. Deixa eu te mostrar um exemplo:

class Animal {
    constructor(nome) {
        this.nome = nome;
    }
 
    comer() {
        return `${this.nome} está comendo!`;
    }
}
 
class Macaco extends Animal {
    constructor(nome,) {
        super(nome);
    }
    falar() {
        return `${this.nome} está falando!`;
    }
}
 
function display(content) {
    console.log(content);
}
 
const macaco = new Macaco('César');
display(macaco.falar());
display(macaco.comer());

