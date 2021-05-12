// atribuição via desestruturação [arrays]

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A


const letras = [b, c, a];

[a, b, c] = letras;

//console.log(a,b,c);


const numeros = [[1,2,3],[4,5,6],[7,8,9],];
[, [quatro,,seis],...resto] = numeros;
//console.log(quatro,seis,resto);


// atribuição via desestruturação {objetos}

const pessoa = {
    nome: 'Silas',
    sobrenome: 'Bispo',
    idade: 18,
    endereço: {
        rua: 'pedra furada',
        cep: '2020-2021'
    }
}

let {nome,sobrenome,idade} = pessoa;
console.log(nome);
