const params = new URLSearchParams(window.location.search)
window.onload = function () {

    if (sessionStorage.getItem('logado') === 'sim') {
        const id = params.get(`id`)

        const pega_json = async (caminho) => {
            const resposta = await fetch(caminho);
            const dados = await resposta.json();
            return dados;
        }

        const acha_cookie = (chave) => {
            const array_cookies = document.cookie.split('; ');
            const procurado = array_cookies.find(
                ( ele ) => ele.startsWith(`${chave}=`)
            )
            return procurado.split('=')[1];
        }

        console.log(acha_cookie('nome'));

        console.log(sessionStorage.getItem('nome'));

        const obj = JSON.parse(sessionStorage.getItem('atleta'));

        console.log(obj.imagem);

        pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
            ( atleta ) => {
                document.body.innerHTML = ``
                const nome = document.createElement('h1');
                const imagem = document.createElement('img');
                const desc = document.createElement('p');
                const posicao = document.createElement('h3');
                const nat = document.createElement('h3');
                const nascimento = document.createElement('h3');
                const num = document.createElement('h3');

                nome.innerHTML = atleta.nome;
                document.body.appendChild(nome);

                imagem.src = atleta.imagem;
                imagem.alt = `foto de ${atleta.nome}`
                document.body.appendChild(imagem);

                posicao.innerHTML = atleta.posicao;
                document.body.appendChild(posicao);

                nat.innerHTML = atleta.naturalidade;
                document.body.appendChild(nat);

                nascimento.innerHTML = atleta.nascimento;
                document.body.appendChild(nascimento);

                num.innerHTML = atleta.n_jogos;
                document.body.appendChild(num);

                desc.innerHTML = atleta.detalhes;
                document.body.appendChild(desc);
            }
        )
    } else {
        document.body.innerHTML = ``
        const mensagem = document.createElement('h1');
        const button = document.createElement('button');

        mensagem.innerHTML = 'Usuário não está logado!';
        document.body.appendChild(mensagem);

        button.id = "voltar";
        button.innerHTML = "Voltar";

        document.body.appendChild(button);

        document.getElementById('voltar').onclick = ( ) => {window.location = 'index.html'}

    }


}