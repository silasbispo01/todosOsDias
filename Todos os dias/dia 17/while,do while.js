// let contador = 0;

// while ( contador < 10 ) {
//     contador++
//     console.log(contador);
// }

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const max = 51;
const min = 1;
let nrandom = random(min, max)

while (nrandom !== 10) {
    nrandom = random(min,max)
    console.log(nrandom)

}

console.log('#######')

do {
    nrandom = random(min,max)
    console.log(nrandom)
} while (nrandom !== 10);
