
// if (diaSemana === 0 ) {
    //     diaS = 'Domingo'
    // } else if ( diaSemana == 1){'Segunda'}
    // else if ( diaSemana == 2) {diaS = 'Terça'}
    // else if ( diaSemana == 3) {diaS = 'Quarta'}
    // else if ( diaSemana == 4) {diaS = 'Quinta'}
    // else if ( diaSemana == 5) {diaS = 'Sexta'}
    // else if ( diaSemana == 6) {diaS = 'Sábado'}
    // else { diaS = ''}
    
    // switch (diaSemana) {
        //     case 0: diaS = 'Domingo';
        //     break;
        
        //     case 1: diaS = 'Segunda'
        //     break;
        
        //     case 2: diaS = 'Terça'
        //     break;
        
        //     case 3: diaS = 'Quarta'
        //     break;
        
        //     case 4: diaS = 'Quinta'
        //     break;
        
        //     case 5: diaS = 'Sexta'
        //     break;
        
        //     case 6: diaS = 'Sábado'
        //     break;
        
        //     default: diaS = ''
        //     break;
        // }

function diadasemanaString (diaSemana) {
    
    switch (diaSemana) {
        case 0: diaS = 'Domingo'
        return diaS;
        
        case 1: diaS = 'Segunda'
        return diaS;
        
        case 2: diaS = 'Terça'
        return diaS;
        
        case 3: diaS = 'Quarta'
        return diaS;
        
        case 4: diaS = 'Quinta'
        return diaS;
        
        case 5: diaS = 'Sexta'
        return diaS;
        
        case 6: diaS = 'Sábado'
        return diaS;
        
        default: diaS = ''
        return diaS;
    }
    
}

const data = new Date('03-21-2020');
numeroDoDiaDaSemana = data.getDay();

const DiaS = diadasemanaString (numeroDoDiaDaSemana);


console.log(diaS, diaSemana)