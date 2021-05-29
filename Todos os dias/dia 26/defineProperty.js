//  Object.defineProperty - define um propriedade
//  Object.defineProperties - define varias propriedades

function Produto (nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    });
}

const p1 = new Produto ('Silas', 20, 3);
console.log(Object.keys(p1))

