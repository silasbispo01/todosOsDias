function rand(){
    let min = 1
    let max = 5
    return (Math.random() * (max - min) + min)  * 1000
}
function esperaAi (msg, tempo) {
    return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
        reject('BAD Value')
        return
    }

        setTimeout(()=> {
            resolve(msg);
        }, tempo)
    })
}
esperaAi('olá', rand())
    .then(msg => {
        console.log(msg)
        return esperaAi(0, rand())
})
    .then(msg => {
        console.log(msg)
})
    .catch(e => {
        console.log('ERRO:' + e)
})

/// metodos úteis

const promises = ['primeiro valor', 
esperaAi('Promise1', rand()),
esperaAi('Promise2', rand()),
esperaAi('Promise3', rand()),
'Outro Valor',

]

// promise.all

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
})

///

const promisesRace = [
esperaAi('Promise1', rand()),
esperaAi('Promise2', rand()),
esperaAi('Promise3', rand()),
]

// promise.race

Promise.race(promisesRace)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
})