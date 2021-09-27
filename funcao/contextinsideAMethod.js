// context inside a method
// NÃO pega o THIS GLOBAL, só o do OBJETO

this.name = "yikes"

const dev = {
    name: "cleiton",
    sayMyName: function() {
        console.log(this.name) // cleiton
    }
}

dev.sayMyName()