function criaHoraPorSegundos (segundos) {
    const data = new Date(segundos * 1000); 
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}


const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
let segundos = 0;
let tempo;

function iniciaTimer () {
    tempo = setInterval(function () {
        segundos++;
        timer.innerHTML = criaHoraPorSegundos(segundos);
    },1000)
};

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('resetar')) {
        console.log('resetou');
    } else if (el.classList.contains('pausar')) {
        console.log('pausou');
    } else if (el.classList.contains('iniciar')) {
        console.log('iniciou');
    }
});

iniciar.addEventListener('click', function(event) {
    clearInterval(tempo);
    iniciaTimer();

});

pausar.addEventListener('click', function(event) {
    clearInterval(tempo);

});

resetar.addEventListener('click', function(event) {
    clearInterval(tempo);
    timer.innerHTML = '00:00:00';
    segundos = 0;

});