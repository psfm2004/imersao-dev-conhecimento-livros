# 📚 imersao-dev-conhecimento-livros

## Sobre o Projeto
Este projeto foi desenvolvido como parte do desafio da **Imersão Dev** da Alura, utilizando o poder da Inteligência Artificial Generativa (GenAI). O objetivo é demonstrar a capacidade de gerar conteúdo estruturado de forma automatizada.

Em vez de uma base de conhecimento sobre tecnologias, este repositório foca na criação e expansão de uma lista de **Livros de Autoconhecimento, Carreira e Produtividade**, seguindo um formato JSON específico.

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução.
* **Google Gemini API:** Para a geração de texto estruturado (JSON).
* **Markdown:** Para documentação (este README).

## ⚙️ Estrutura da Base de Conhecimento

O modelo de IA é instruído a gerar dados em um array de objetos JSON, onde cada objeto representa um livro e possui os seguintes campos:

| Campo | Tipo | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `nome` | String | Título completo do livro. | Hábitos Atômicos |
| `descricao` | String | Resenha concisa do livro. | Foco em pequenas mudanças para grandes resultados. |
| `data_criacao` | String | Ano de lançamento. | 2018 |
| `link` | String | URL para o site oficial ou documentação. | https://siteoficial.com |
| `tags` | Array<String> | 3 a 5 categorias do livro. | ['hábitos', 'produtividade', 'guia prático'] |

## 📦 Como Rodar Localmente

Siga os passos para configurar e executar o projeto na sua máquina:

### Pré-requisitos
* Node.js instalado.
* Chave de API do Google Gemini.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/SEU_USUARIO/imersao-dev-conhecimento-livros.git](https://github.com/SEU_USUARIO/imersao-dev-conhecimento-livros.git)
cd imersao-dev-conhecimento-livros
