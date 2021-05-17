// 2 - Escreva uma função chamada ePaisagem que recebe altura e largura de uma imagem.
// retorne true se a imagem estiver no modo Paisem

function ePaisagem (altura, largura) {
    if (altura > largura) {
        return false;
    } else {
        return true;
    }
}

//console.log(ePaisagem(2,6))

// simplificado 

const iPaisagem = (largura, altura) => largura > altura ? true : false; 
console.log(iPaisagem(20,40))
