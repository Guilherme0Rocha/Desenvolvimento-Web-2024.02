window.onload = function () {
    const container = document.getElementById('container');

    const pega_json = async (caminho) => {
        const resposta = await fetch(caminho);
        const dados = await resposta.json();
        return dados;
    }

    const montaCartao = (atleta) => {
        const cartao = document.createElement('article');
        const nome = document.createElement('h1');
        const imagem = document.createElement('img');
        const desc = document.createElement('p');
        const link = document.createElement('a');

        nome.innerHTML = atleta.nome;
        cartao.appendChild(nome);

        imagem.src = atleta.imagem;
        cartao.appendChild(imagem);

        desc.innerHTML = atleta.detalhes;
        cartao.appendChild(desc);

        link.innerHTML = "Saiba Mais..."
        link.href = `outra.html?id=${atleta.id}&altura=${atleta.altura}`
        cartao.appendChild(link)

        container.appendChild(cartao);
    }
    
    
    /*`
        <article class="card">
        <h2 class="nunito">${dados.indexOf(atleta) + 1}/${dados.length}</h2>
        <h1 class="nunito-bold">${atleta.nome}</h1>
        <img src="${atleta.imagem}">
        <p class="nunito">${atleta.detalhes}</p>
        </article>
    `;*/
    pega_json("https://botafogo-atletas.mange.li/2024-1/masculino").then(
        ( obj ) => {
        console.log(`isso imprime depois`);
        obj.forEach( (elemento) => montaCartao(elemento));
        }
    )

    console.log(`isso imprime antes`);

}