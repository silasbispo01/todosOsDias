
function calculaIMC () {

    peso = document.querySelector('.peso').value;
    altura = document.querySelector('.altura').value;

    imc = peso / (altura**2)
    

    
    if (imc < 18.5 ) {
         resultado = 'Abaixo do peso'
    } else if ( 18.5 <= imc && imc <= 24.9 ) {
        resultado =  'Peso ideal'
    } else if ( 25 <= imc && imc <= 29.9 ) {
        resultado = 'Sobrepeso'
    } else if ( 30 <= imc && imc <= 34.9 ) {
        resultado = 'Obesidade grau 1'
    } else if ( 35 <= imc && imc <= 39.9 ) {
        resultado = 'Obesidade grau 2'
    } else if ( imc >= 40 ) {
        resultado = 'Obesidade grau 3'
    }

    const resposta = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
    const erroPeso = `Preencha o campo de peso`;
    const erroAltura = `Preencha o campo de altura`;


    function validarForm () { 
        if (peso == "") {
            document.querySelector('#resposta').innerHTML = erroPeso;
            document.querySelector('#resposta').style.backgroundColor = 'var(--erro-color)'
        } else if (altura == "") {
            document.querySelector('#resposta').innerHTML = erroAltura;
            document.querySelector('#resposta').style.backgroundColor = 'var(--erro-color)'
        } else {
            document.querySelector('#resposta').innerHTML = resposta;
            document.querySelector('#resposta').style.backgroundColor = 'var( --resposta-color)'
        }
    };

        return validarForm();
}

