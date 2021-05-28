// map 
// dobre os números 
const numeros = [1, 24, 21, 56, 12, 6, 9, 27, 43, 65, 11, 33];
const numerosEmDobro = numeros.map(valor => valor * 2);

//console.log(numerosEmDobro);

//retorne apenas uma string com o nome da pessoa
//remova apenas a chave 'nome' do objeto
//adicione uma chave id em casa objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 60 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasString = pessoas.map(obj => obj.nome);
//console.log(pessoasString);

const idades = pessoas.map(obj => ({idade: obj.idade}));
//console.log(idades);

const nomeComIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj }
    newObj.ID = indice + 1;
    return newObj;
});

console.log(nomeComIds)
console.log(pessoas)