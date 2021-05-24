// Declaração de função (function hoisting)
falaOi();
function falaOi () {
    console.log('oi')
}

//First-class Objetcts (Objetos de primeira classe)
//Function Expression
const souUmDado = function() {
    console.log('Sou um dado')
}

function executaFunção (função) {
    função();
}

executaFunção(souUmDado);

//Arrow Function 
const funçãoArrow = () => {
    console.log('Função Arrow')
}

funçãoArrow()

// Dentro de um Objeto

const obj = {
    falar: function () {
        console.log('Estou Falando...');
    }
}

obj.falar();