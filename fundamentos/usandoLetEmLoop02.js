const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function()       {      // push serve p botar coisa no array
        console.log(i)    
    })
}

funcs[2]()
funcs[8]()
// agora o array vai guardar o valor que a gente pede.
