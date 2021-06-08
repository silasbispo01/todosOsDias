class ValidarCPF {
    constructor (cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    isSequence () {
        if(this.cpfLimpo[1].repeat(11) === this.cpfLimpo) return true
    }
    valida() {
        if(this.cpfLimpo === 'undefined') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequence()) return console.log('CPF não é Válido')
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        this.criaCodigo(cpfParcial)
        
        const codigo1 = this.criaCodigo(cpfParcial)
        const codigo2 = this.criaCodigo(cpfParcial + codigo1)
        const cpfRetornado = cpfParcial + codigo1 + codigo2
        

        if(cpfRetornado !== this.cpfLimpo) return console.log('CPF não é Válido')

        return console.log('CPF Válido')
    }
    criaCodigo(cpfParcial) {
         let key = cpfParcial.length + 1
        
        let total = 0;
        
        for(let val of cpfParcial) {
            total += (val * key)
            key--
        }

        let digito = 11 - (total % 11) 
        
        if (digito > 9) {
            return '0'
        } else { digito }

        return digito 
    }
    
}
const cpf1 = new ValidarCPF('27584488587')
cpf1.valida();