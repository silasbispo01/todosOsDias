//contine continua para proxima iteração
//break sai do laço

const numb = [1,2,3,4,5,6,7,8,9,10];
const capturado = [];

for (let numbs of numb) {
    
    console.log(numbs);

    if (numbs == 2) {
        capturado.push(2);
        continue;
    }
    
    if (numbs == 8) {
        break;
    }
}

console.log(capturado)