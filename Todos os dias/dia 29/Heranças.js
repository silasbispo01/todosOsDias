class Pai {
    constructor (nome, filhos) {
        this.nome = nome;
        this.filhos = filhos;
    }
    
    
}

const p1 = new Pai ('Rogério', 2);
//console.log(p1);

 class Geração_2 extends Pai {
     constructor (nome, filhos, feitos) {
        super(nome, filhos);
        this.feitos = feitos;
     }
}


const p2 = new Geração_2('Vagner', 3, 7)
console.log(p2)