// async function carregaDados () {
//     const resposta = await fetch("./pessoas.json")
//     const json = await resposta.json()
//     carregaElementos(json)

// }   
// carregaDados(); 

const elementos = async () => {
    try {
        const response = await axios('./pessoas.json')
        carregaElementos(response.data)
    } catch (e) {
        // algum tratamento de erro
        console.log(e)
    }
} 

/// response === .json

function carregaElementos(response) {
    for(let pessoas of response) {
        const resultado = document.querySelector('.resultado')
        const table = document.createElement('table')
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        resultado.appendChild(table)
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        
        
        td1.innerHTML = 'Nome: ' + pessoas.nome;
        td2.innerHTML = 'Idade: ' + pessoas.idade;
        
    }
}

elementos()