try {
    console.log(naoExisto)
} catch (err) {
    console.log('Não funciona')
}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!')
    }

    return x + y; 
}

try {
    console.log(soma(1,3));
    console.log(soma('1',2));
} catch (error) {
    console.log(error)
}

//finally, sempre envia, idependente dos erros.