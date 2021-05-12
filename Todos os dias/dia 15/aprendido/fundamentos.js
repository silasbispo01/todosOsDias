// ==== var e let ==== //

var nome1 = 'Silas';
let nome = 'Silas';

//var nome1 = 'Bispo'; <- // var permite redeclarar variáveis!
// let nome = 'Bispo';

const verdadeiro = true; 

/// let tem escopo de bloco { ... bloco }

if (verdadeiro) {
    var nome1 = 'Luiz'; // redeclarando...
    let nome = 'Junior';

    if (verdadeiro) {
        var nome1 = 'Otávio'; // redeclarando...
        let nome = 'Márcio';
    }
}

console.log (nome, nome1); 