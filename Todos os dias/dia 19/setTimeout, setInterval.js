function mostraHora () {
    let data = new Date ();
    return data.toLocaleTimeString('pt-BR', {hour12: false}); 

}




const timer = setInterval(function () {
    console.log(mostraHora());
}, 100);

setTimeout(function() {
    clearInterval(timer);
},1000)