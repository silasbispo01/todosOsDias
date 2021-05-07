
nome = 'Luiz';
function saudacao(nome) {
    return `Bom dia ${nome}!`;

}
 const res = saudacao(nome);
console.log(res);

//


x = 5;
y = 7;
function soma(x, y) {
    const res = x + y;
    return res;

}

const resu = soma(x, y);
console.log(res);

//

const raiz = function (n) {
    return n ** 0.5;
};  

console.log(raiz(9));

//or 

const raiz2 = (n) => {
    return n ** 0.5;
};  

console.log(raiz(9));

//or 

const raiz3 = n => n ** 0.5; 

console.log(raiz(9));