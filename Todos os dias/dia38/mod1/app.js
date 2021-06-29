const mod1 = require('./mod1')
const nome = require('./mod1').nome
const nomeCompleto = require('./mod1').NomeCompleto
console.log(nome, nomeCompleto)


const { sobrenome, NomeCompleto } = require('./mod1')
console.log(sobrenome, NomeCompleto)

// maneiras de importar 


