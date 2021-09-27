// funcs = array vazio

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function()       {      // push serve p botar coisa no array
        console.log(i)    
    })
}

funcs[2]()
funcs[8]()

// vai só imprimir 10 pq javascript é feio fedido
// só vai funcionar com let