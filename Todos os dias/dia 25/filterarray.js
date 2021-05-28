// Filter
const numeros = [1, 24, 21, 56, 12, 6, 9, 27, 43, 65, 11, 33];

//Retorne numeros maiores que 10;
//sem o Filter
const maioresDez = []
for (let valor of numeros) {
    if (valor > 10) {
        maioresDez.push(valor)
    }
}
//console.log(maioresDez);


//com o Filter

// function callBackFilter(valor){
//     return valor > 10;
// };

const numFilter = numeros.filter(valor =>valor > 10);
//console.log(numFilter);

//
//retorne as pessoas com mais ou igual a 5 letras no nome
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 60 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoasComNomeGrande)

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDe50)

const pessoasQueTerminamComA = pessoas.filter(obj => obj.nome.slice(-1) === 'a');
console.log(pessoasQueTerminamComA)