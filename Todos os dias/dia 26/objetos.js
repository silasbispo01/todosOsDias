const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}; 


const pessoa1 = new Object();
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'


//console.log(pessoa1['nome'])

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
//console.log(p1.nomeCompleto)

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);
}

const p1 = new Pessoa('Silas', 'Bispo');