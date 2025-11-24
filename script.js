let cardContainer = document.querySelector(".card-container"); // Seleciona o elemento HTML com a classe "card-container" e o armazena na variável.
let dados = []; // Inicializa um array vazio que irá armazenar os dados carregados do arquivo JSON.

async function iniciarBusca() { // Define uma função assíncrona para buscar e exibir os dados.
    let resposta = await fetch("data.json"); // Faz uma requisição para buscar o arquivo "data.json" e aguarda a resposta.
    dados = await resposta.json(); // Converte a resposta da requisição para o formato JSON e armazena na variável "dados".
    // A linha abaixo foi removida para que a tela inicial não mostre todos os cards.
    // renderizarCards(dados); 

    const campoBusca = document.querySelector("#busca"); // Seleciona o elemento de input com o ID "busca".
    campoBusca.addEventListener("input", () => { // Adiciona um "ouvinte" que executa uma função sempre que o usuário digita algo no campo de busca.
        const termoBuscado = campoBusca.value.toLowerCase(); // Pega o valor digitado, converte para minúsculas para uma busca não sensível a maiúsculas/minúsculas.
        
        // Se o campo de busca estiver vazio, não mostra nenhum card. Caso contrário, filtra os dados.
        const dadosFiltrados = termoBuscado ? dados.filter(dado => 
            dado.nome.toLowerCase().includes(termoBuscado) || 
            dado.descricao.toLowerCase().includes(termoBuscado) 
        ) : [];
        renderizarCards(dadosFiltrados); // Chama a função de renderização novamente, mas desta vez com os dados que passaram no filtro.
    });
}

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = "";

    for (let dado of dadosParaRenderizar) {
        // Trata o campo de tags. Cria o HTML se as tags existirem e for um array válido.
        const tagsHtml = dado.tags && Array.isArray(dado.tags) && dado.tags.length > 0
            ? `<p class="tags-container"><strong>Tags:</strong> ${dado.tags.map(tag => `<span class="tag">${tag}</span>`).join(', ')}</p>`
            : ''; // Se não houver tags, a string fica vazia.

        // Usa data_criacao. Se não existir, exibe uma mensagem de Indisponível.
        const anoExibido = dado.data_criacao || 'Indisponível';

        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = ` 
            <h2>${dado.nome}</h2> 
            <p>Ano: ${anoExibido}</p> 
            <p>${dado.descricao}</p> 
            ${tagsHtml} <a href="${dado.link}" target="_blank">Saiba mais</a> 
        `;
        cardContainer.appendChild(article);
    }
}

iniciarBusca(); // Chama a função principal para iniciar o carregamento dos dados e a funcionalidade de busca.
