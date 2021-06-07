/* 
705.484.450-52
070.987.720-03

(Achar o primeiro dígito)
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
// Se passar de 9, considera dígito como 0; 

(Achar o segundo dígito)
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 = 284

11 - (284 % 11) = 2 (Segundo dígito)
// Se passar de 9, considera dígito como 0;

if 7 0 5 4 8 4 4 5 0 5 2 === 705.484.450-52 CPF = true;


*/


// const cpf = [7, 0, 5, 4, 8, 4, 4, 5, 0, 5, 2];
// const cpf = [0, 0, 5, 4, 8, 4, 4, 5, 0, 5, 2];
let cpf = 0;
let cpfinicial = 0;
const dig1 = [10, 9,  8,  7,  6,  5,  4,  3,  2];
const dig2 = [11, 10, 9,  8,  7,  6,  5,  4,  3,  2];
let acumulador = 0;
let primeiroDigito = 0;
let segundoDigito = 0;
//cpf.map((value, index) => console.log(cpf[index]))
const doc = document.querySelector('body')
function valida() {
    const input = document.querySelector('.input').value;
    cpf = input.replace(/\D+/g, '');
    cpf = Array.from(cpf);
    cpfinicial = [...cpf]
    cpf.splice(-2)
    console.log(cpf, cpfinicial)
    return multiplica1();
}

// console.log(cpf)
function multiplica1 () {  
    for(let index in cpf)
    acumulador += cpf[index] * dig1[index]
    return acha1digito(acumulador);
}

function multiplica2 (value) {
    acumulador = 0;
    cpf.push(value)
    for(let index in cpf)
    acumulador += cpf[index] * dig2[index];
    return acha2digito(acumulador);
}

function acha1digito (value) {
    primeiroDigito = 11 - (value % 11)
    if (primeiroDigito > 9) primeiroDigito = 0;
    return multiplica2(primeiroDigito);
}

function acha2digito (value) {
    segundoDigito = 11 - (value % 11)
    if (segundoDigito > 9 ) segundoDigito = 0;
    cpf.push(segundoDigito);
    return validaCPF();
}

function validaCPF () {
    const cpfstring = cpf.toString();
    const cpfinicialstring = cpfinicial.toString();
    if (cpfstring == cpfinicialstring) {
       console.log('CPF Válido')
       doc.innerText = 'CPF Válido'
       return;
    }

    doc.innerText = 'CPF inválido'
    console.log('CPF inválido')
        
}
