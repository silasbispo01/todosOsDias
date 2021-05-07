const array = [1,2,3];
array.push(4);
array[0] = 'Silas'
console.log(array);

// sem objetos 

const nome01 = "Silas";
const sobrenome01 = "Bispo";
const idade01 = "18";

// com objetos 

const pessoa = {
    nome: 'Silas',
    sobrenome: 'Bispo',
    idade:18

};

console.log(pessoa)

// uma função que cria objetos 

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade     
    }
}

const pessoa1 = criaPessoa ('Silas', 'Bispo', 18)
console.log(pessoa1);