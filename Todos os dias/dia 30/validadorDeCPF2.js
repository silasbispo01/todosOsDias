/* 
705.484.450-52
070.987.720-03

(Achar o primeiro dígito)
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
// Se passar de 9, considera dígito como 0; 

(Achar o segundo dígito)
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 = 284

11 - (284 % 11) = 2 (Segundo dígito)
// Se passar de 9, considera dígito como 0;

if 7 0 5 4 8 4 4 5 0 5 2 === 705.484.450-52 CPF = true;

*/

function ValidadorDeCPF (cpf) {
   Object.defineProperty(this, 'cpfLimpo', {
       enumerable: true,
       get: function() {
           return cpf.replace(/\D+/g, '');
       }
   });
}
ValidadorDeCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = (cpfParcial + digito1 + digito2)
    return novoCPF === this.cpfLimpo;
}

ValidadorDeCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let key = cpfArray.length + 1
    let total = cpfArray.reduce((ac, val) => {
        ac += (key * Number(val))
        key--
        return ac
    }, 0);

    let digito = () => {
        let digito = 11 - (total % 11)
        return digito > 9 ? 0 : digito
    }
    return digito()
}

ValidadorDeCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) 
    return sequencia === this.cpfLimpo ? true : false
}



getCPF = () => {
    const cpfNumber = document.querySelector('input').value
    const p = document.querySelector('p')
    const cpf = new ValidadorDeCPF (`${cpfNumber}`);

    if(cpf.valida()) return p.innerHTML = `O CPF: <b>${cpfNumber}</b> é valido!`
    return p.innerHTML = `O CPF: <b>${cpfNumber}</b> não é valido!`
}