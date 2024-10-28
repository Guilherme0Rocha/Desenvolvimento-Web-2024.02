window.onload = function () {
    const container = document.getElementById('container');

    const montaCartao = (atleta) => `
        <article class="card">
        <h2 class="nunito">${dados.indexOf(atleta) + 1}/${dados.length}</h2>
        <h1 class="nunito-bold">${atleta.nome}</h1>
        <img src="${atleta.imagem}">
        <p class="nunito">${atleta.detalhes}</p>
        </article>
    `;

let conteudo = ''

        /*for(let i=atleta;i < dados.length; i++){
            let atleta = dados[i];
    
            container.innerHTML += `
        `
        }*/

dados.forEach( (elemento) => conteudo += montaCartao(elemento))

container.innerHTML = conteudo;

}