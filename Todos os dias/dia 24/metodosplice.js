const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];


// nomes.splice(índice, delete, elem1, elem2, elem3)
// .pop()

const novo = nomes.slice(2)
nomes.splice(-2,2);
console.log(novo, nomes);
// removeu o último elem do array

//