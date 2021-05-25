// IIFE - Immediately invoked function expression

(function(idade, peso, altura){
    const sobrenome = 'Bispo';
    function criaNomeC(nome) {
        const NomeC = nome + ' ' + sobrenome;
        return NomeC
    }

    function verNome() {
        console.log(criaNomeC('Silas'));
    }

    verNome();
    console.log(idade, peso, altura);
})(18, 60, 177);