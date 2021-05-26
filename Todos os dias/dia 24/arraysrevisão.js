// Valor por referência
// String, Objetos, Funções, Números
const nomes = ['Maria', 'Eduarda', 'Joana'];
const novo = [...nomes] // spread 



nomes[2] = 'João';
delete novo[1];
console.log(nomes)
console.log(novo)





// console.log(nomes)
// delete nomes[2];
// console.log(nomes)
// const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
