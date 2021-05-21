const button = document.querySelector('[data-button]');
const ul = document.querySelector('[data-ul]');
const input = document.querySelector('[data-input]');


function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaButton() {
    const btn = document.createElement('button');
    return btn;
}

function limpaInput () {
    input.value = '';
    input.focus();
}

function criaTarefa (textoNode) {
   const li = criaLi();
   li.innerText = textoNode;
   ul.appendChild(li);

   const btn = criaButton();
   btn.innerText = 'Apagar';
   btn.setAttribute('class', 'apagar')
   li.appendChild(btn);

   limpaInput();
}

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
        criaTarefa(input.value);
    }
})

button.addEventListener('click', function() {
    if (!input.value) return;
    criaTarefa(input.value);
})

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})






// function adicionarTarefa () {
//     contador++;
    
//     const input = document.querySelector('[data-input]').value;
//     if (input == '') {

//         alert('adicione alguma coisa!')

//     } else {
        
//         const newButton = document.createElement('button');
//         const p = document.createElement('p');
//         const apagarNovo = document.createTextNode('Apagar')
//         newButton.appendChild(apagarNovo)
//         newButton.setAttribute('onclick', 'fecharTarefa()')
//         newButton.classList.add(contador)
//         const novaTask = document.createTextNode(input);
//         p.appendChild(novaTask)
//         const li = document.createElement('li')
//         li.setAttribute('id', contador)
//         li.appendChild(p)
//         li.appendChild(newButton)
//         ul.appendChild(li);





//     }
    
// };

// function fecharTarefa() {
//    this.
// } 

