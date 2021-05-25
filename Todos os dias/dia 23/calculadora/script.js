function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
        },

        clearDisplay(){
            this.display.value = '';
        },

        delOne(){
            this.display.value =  this.display.value.slice(0, -1);
        },

        countResult(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida!');
                }  
                this.display.value = String(conta.toFixed(5));

            } catch(e) {
                alert('Conta invalida!')
            }
        },
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                };
                if(el.classList.contains('btn-del')){
                    this.delOne();
                };
                if(el.classList.contains('btn-eq')){
                    this.countResult();
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();