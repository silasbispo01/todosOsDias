// -> filtrar pares
// -> dobrar valores
// -> reduzir (somar tudo)

const numeros = [1, 24, 21, 56, 12, 6, 9, 27, 43, 65, 11, 33];
const pares = numeros.filter(num => num % 2 === 0).map(num => num * 2).reduce((total,num) => total += num);

console.log(pares)
