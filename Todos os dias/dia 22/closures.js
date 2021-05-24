function retornaFunction (nome) {
    return function () {
        return nome;
    }
}

const função = retornaFunction('Luiz');   
const função2 = retornaFunction('Otávio');  
console.dir(função)
console.dir(função2)

console.log(função(), função2());