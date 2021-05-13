const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
    console.log(frutas[i])
}

// For in, lê os índices ou chaves.

const pessoa = {
    nome: 'Javier',
    sobrenome: 'Rodriguez',
    idade: '21'
}

for ( let i in pessoa) {
    console.log(pessoa[i])
}
// For of 


for (let valor of frutas) {
    console.log(valor)
}