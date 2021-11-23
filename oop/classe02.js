class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // prototipo de pai = avo, msm coisa de java acho eu
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome) // o super é pra instanciar a função construtora da super classe, neste casso a superclasse de pai é avo
        this.profissao = profissao // atribuindo profissao ao objeto que foi instanciado
        
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // neste caso o super esta chamando o constructor de pai
    }
}

const filho = new Filho
console.log(filho)