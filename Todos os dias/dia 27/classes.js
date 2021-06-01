class Produto {
    constructor(nome, preço){
        this.nome = nome;
        this.preço = preço;
    }

    promoção () {
        return console.log(`${this.nome} está na promoção, apenas ${this.preço - 5}R$!`)
    }
}

const casaco = new Produto('Casaco', '70');
const livro = new Produto('Harry Potter', '50');
//console.log(casaco);

const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade () {
        return this[_velocidade];
    }

    acelerar () {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar () {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

 const octane = new Carro ('octane')
// for(let i = 0; i <= 200; i++) {
//     octane.acelerar()
// }

octane.velocidade = 90;
console.log(octane.velocidade)