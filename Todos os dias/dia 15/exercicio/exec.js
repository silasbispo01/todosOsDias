const elementos = [ 
    {tags: 'p', texto: 'Frase 1'},
    {tags: 'div', texto: 'Frase 2'},
    {tags: 'footer', texto: 'Frase 3'},
    {tags: 'section', texto: 'Frase 4'},
]


const resultado = document.querySelector('.container');
 
for (let i = 0; i < elementos.length; i++) {    
    let {tags, texto} = elementos[i];
    resultado.innerHTML += `<${tags}>${texto}</${tags}>`;    
}

// const container = document.querySelector('#content');
// container.innerHTML('Olá')
// let t = 'ola'


// //container.appendChild(tag);
// //tag.appendChild(string);

// for ( i = 0 ; i < elementos.length ; i++) {
//     let {texto} = elementos[i];
//     let {tags} = elementos[i];
    
//     let tag = document.createElement(tags);
//     let string = document.createTextNode(texto)
//     console.log(t)

// }