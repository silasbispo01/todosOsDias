// const data = new Date('2002-12-26 12:00:59') ; // 01/01/1970 Timestamp unix ou época unix 
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milisegundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());

// console.log(data.toString());
function zeroAEsquerda(num) {
    return num >= 10 ? num : num = `0${num}`; 
}

function formataData (data) {
    
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const horas = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());

    return `A data de hoje é: ${dia}/${mes}/${ano} ${horas}:${minutos}`
}

const data = new Date();
const dataBrasil = formataData(data); 
console.log(dataBrasil)


