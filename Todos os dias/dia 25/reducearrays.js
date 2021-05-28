// Some todos os números (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)
const numeros = [1, 24, 21, 56, 12, 6, 9, 27, 43, 65, 11, 33];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador;
}, 0)


const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 !== 0) {
        acumulador += valor
    };
    return acumulador;
}, 0)
//console.log(pares);

// Retorne a pessoa mais velha 
const pessoas = [
    { nome: 'Luiz', idade: 24 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 60 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const maisVelho = pessoas.reduce(function (acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

//console.log()

const obj = pessoas.map(function (obj, valor) {
   console.log(obj.idade)
})