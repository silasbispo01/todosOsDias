let numero = Number(prompt('Digite seu número')); //número que a pessoa digitou


let numeroPrincipal = document.getElementById('numero-principal');
let numeroInteiro = document.getElementById('numero-inteiro');
let numeroRaizQuadrada = document.getElementById('numero-raizQuadrada');
let nNaN = document.getElementById('numero-NaN');
let nArredondadoBaixo = document.getElementById('numeroArredonBaixo');
let nArredondadoCima = document.getElementById('numero-arredondadoCima');
let nDuasCasasDecimais = document.getElementById('numero-duasCasasDecimais');


numeroPrincipal.innerHTML = numero;

numeroRaizQuadrada.innerHTML = numero ** 0.5;

numeroInteiro.innerHTML = Number.isInteger(numero);

nArredondadoBaixo.innerHTML = Math.floor(numero);

nArredondadoCima.innerHTML = Math.ceil(numero);

nNaN.innerHTML = Number.isNaN(numero);

nDuasCasasDecimais.innerHTML = numero.toFixed(2);










