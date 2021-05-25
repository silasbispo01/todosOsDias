// Factory function
// Constructor function
function criaPessoa(nome, sobrenome,altura, peso) {
    return {
        nome,
        sobrenome,
        
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter 
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },
        fala: function(assunto){
           return `${this.nome}, está falando ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc(){
            let imc = (this.peso / (this.altura ** 2)).toFixed(2);
            return `${this.nome}, seu imc é: ${imc}`
        }
    };
}

const p1 = criaPessoa('Silas','Bispo', 1.77, 60)
//const p2 = criaPessoa('Maria','Bispo', 1.60, 50)
const p2 = criaPessoa();
p2.nomeCompleto = 'Silas Bispo dos Santos'
console.log(p2.nomeCompleto)
console.log(p2.nome)
console.log(p2.sobrenome)
// console.log(p2.imc);