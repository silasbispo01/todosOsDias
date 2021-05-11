
function getData() {
    
    const data = new Date();

    const dataOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const datas = data.toLocaleDateString('pt-BR', dataOptions);
    const horas = data.getHours()+':'+ data.getMinutes();
    
    const dataHora = {datas, horas};

    return dataHora;
}


function setDataHora() {

    horas = getData().horas;
    datas = getData().datas;

    document.querySelector('#data').innerHTML = datas;
    document.querySelector('#horario').innerHTML = horas;
}

setDataHora();





// function getDiaS (diaS) {
//     switch (diaS) {
//         case 0: diaS = 'Domingo' 
//         return diaS;  

//         case 1: diaS = 'Segunda' 
//         return diaS;  

//         case 2: diaS = 'Terça' 
//         return diaS;  

//         case 3: diaS = 'Quarta' 
//         return diaS; 

//         case 4: diaS = 'Quinta' 
//         return diaS; 

//         case 5: diaS = 'Sexta' 
//         return diaS;  

//         case 6: diaS = 'Sábado' 
//         return diaS;  

//         default: diaS = ''
//         return diaS;
//     }
// }

