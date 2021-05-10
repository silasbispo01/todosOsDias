// operadores de comparação 

/* 
> maior que
>= maior que ou igual 
> menor que 
<= menor ou igual a 
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/ 

const compa = 5 >= 5;
const comp = 10 > 5;
const igual = compa == comp;
const igualres = compa === comp; // usar este 

console.log(compa, comp, igual, igualres);

// operadores de lógica

/* 
&& -> And -> E  -> todas as expressões precisam retornar true
|| -> Or -> Ou
! -> Not -> Não
*/ 
const expressãoEnd = true && true && true;
console.log(expressãoEnd);
const expressãoOr = false || false || true; 
console.log(expressãoOr);

console.log(!false); // true
console.log(!true); // false

function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;
console.log(vaiExecutar && falaOi())

const corUsuario = 'red';
const corPadrão = corUsuario || 'preto';

console.log(corPadrão)
