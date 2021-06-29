const nome = 'batata'
const sobrenome = 'maçã'

// Três modos de exportar 

//module.exports.nome = nome;
//exports.sobrenome = sobrenome;

module.exports = {
    nome, sobrenome
}

// Não funciona mais por causa desse de cima
// this.NomeCompleto = nome + ' ' + sobrenome;