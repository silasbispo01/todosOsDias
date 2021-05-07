/*
Primitivos - string, number, boolean, undefined, null, (bigInt, symbol)
*/
// Primitivos imutáveis!
let nome = 'Silas';
nome[0] = 'T'
console.log(nome[0])

//

let a = 'A'
let b = a; // cópia
 
console.log(a,b);

a = 'outra coisa';
console.log(a, b)

// referencia (mutável) array, object, function.

let c = [1,2,3] 
let d = c; // não é cópia! uma referência no valor da mémoria
let e = [...c] // <- cópia de um array
console.log(c,d);

c.push(4);
console.log(c,d);

d.pop(); 
console.log(c,d);