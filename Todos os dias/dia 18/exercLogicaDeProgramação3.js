// se o número for divisível por 3 retorna Fizz
// se o número for divisível por 5 retorna Buzz
// se o número for divisível por 3 e 5 retorna FizzBuzz 
// se não for divisível por nenhum dos dois, retorna o próprio número! 


function FB (n) {

    if (n % 3 == 0 & n % 5 == 0) {
        return 'FizzBuzz'
    } else if ( n % 3 == 0) {
        return 'Fizz'
    } else if ( n % 5 == 0 ) {
        return 'Buzz'
    } else { return n }
}

console.log(FB(15));