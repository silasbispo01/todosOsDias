function Calculadora () {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')) {
                this.addNum(el.innerText);
            };
            if(el.classList.contains('btn-clear')) {
                this.clearNum();
            };
            if(el.classList.contains('btn-del')) {
                this.clearOne();
            };
            if(el.classList.contains('btn-eq')) {
                this.countResult();
            };
        })
    };

    this.addNum = (valor) => {
        this.display.value += valor;
    };

    this.clearNum = () => {
        this.display.value = ' ';
    };

    this.clearOne = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.countResult = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (Number.isInteger(conta)) {
                return this.display.value = String(conta.toFixed(0));
            };
            if (!conta) {
                return alert('conta invalida');
            };
            this.display.value = String(conta.toFixed(5));
        } catch {
            return console.log('conta invalida');
        }       
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
