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

function renderizarCards(dadosParaRenderizar) { // Define a função que cria e exibe os cards na tela, recebendo um array de dados.
    cardContainer.innerHTML = ""; // Limpa todo o conteúdo HTML do container de cards para evitar duplicatas.
    for (let dado of dadosParaRenderizar) { // Inicia um loop para percorrer cada item (objeto) no array de dados recebido.
        let article = document.createElement("article"); // Cria um novo elemento HTML <article> para ser o card.
        article.classList.add("card"); // Adiciona a classe CSS "card" ao elemento <article> recém-criado.
        article.innerHTML = ` 
        <h2>${dado.nome}</h2> 
        <p>Ano: ${dado.data_criacao}</p> 
        <p>${dado.descricao}</p> 
        <a href="${dado.link}" target="_blank">Saiba mais</a> 
        `; // Define o conteúdo HTML do card usando os dados do objeto atual (nome, ano, descrição, link).
        cardContainer.appendChild(article); // Adiciona o card (elemento <article>) como um filho do container de cards na página.
    }
}

iniciarBusca(); // Chama a função principal para iniciar o carregamento dos dados e a funcionalidade de busca.