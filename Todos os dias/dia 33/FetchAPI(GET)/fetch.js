document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    try {
        const resposta = await fetch(href)
        if (resposta.status !== 200) throw new Error('ERRO 404')
        const html = await resposta.text()
        carregaResultado(html)
    } catch (e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}