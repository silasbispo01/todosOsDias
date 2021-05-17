// 1  - escreva uma função que recebe 2 números e retorna o maior deles. 

n1 = 4;
n2 = 5;
function retornaMaior () {
    if (n1 > n2) {
        console.log(`${n1} é maior que ${n2}`)
    } else {
        console.log(`${n2} é maior que ${n1}`)
    }
}

retornaMaior();

// simplificado 

const maior = (n3, n4) => n3 > n4 ? n3 : n4; 

//console.log(maior(7,5))

