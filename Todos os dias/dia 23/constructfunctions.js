// construct functions -> Objetcts
// factory functions -> Objetcts
// Construtora -> Pessoa não 'criaPessoa'.

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    }
}

const p1 = new Pessoa ('Silas', 'Bispo');
const p2 = new Pessoa ('Luiz', 'Otávio');

p2.metodo();