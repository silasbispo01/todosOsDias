// ? : 
userPoints = 1000; 

if (userPoints > 999) { 
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}

const nivelUsuário = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

console.log(nivelUsuário)
