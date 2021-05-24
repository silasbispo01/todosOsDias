// Função definida com a palavra function tem um argumento que sustenta todos os parametros enviados

function função () {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total)

}

função( 1, 2, 3, 4, 5);

function soma (a, b = 2 , c = 4) {
    console.log(a + b + c);
}

soma(2, undefined, 20);



function objeto ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}


let obj = {
    nome: 'Silas',
    sobrenome: 'Bispo',
    idade: 18
}

objeto(obj);
