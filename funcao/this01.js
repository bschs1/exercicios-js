// fazer esses códigos no console do chrome 
function f1() {console.log(this === window)}
f1()
document.getElementsByTagName('body')[0].onclick = f1 
// quando clicar o this vai ficar falso (linhas 2~4)

function f2() { console.log(this === document) } 
document.getElementsByTagName('body')[0].onclick = f2
 


function Pessoa(){
    this.idade = 0;
   
    setInterval(() => {
      this.idade++; // |this| corretamente se refere ao objeto Pessoa
    }, 1000);
  }
   
  var p = new Pessoa();

