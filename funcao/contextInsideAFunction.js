// context inside a function
// - não pega o this global, mas se NÃO estiver no modo estriti, SIM!

this.name = "enzo auditore"

function sayMyName() {
    console.log(this.name)
}

sayMyName()