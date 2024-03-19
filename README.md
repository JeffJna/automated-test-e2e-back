# Automação de teste API - Banco XYZ

Este projeto de testes automatizados para a API do Trello integra o framework Cypress com o Mochawesome, um gerador de relatórios simulando cenários de teste variados, incluindo a criação de boards, listas e cartões, além da exclusão dos mesmos.

## Pré-requisitos e Configuração

Antes de iniciar, é necessário ter instalado em sua máquina:

- Node.js (16 ou superior)
- Cypress

Para configurar o ambiente de testes, siga os passos abaixo:

1. Clone o repositório para a sua máquina local.
2. No diretório do projeto, execute `npm install` para instalar as dependências.
3. Adicione suas credenciais da API do Trello (apiKey e token) no arquivo `cypress.env.json` seguindo o exemplo:

{
"apiKey": "sua_api_key_aqui",
"token": "seu_token_aqui"
}

## Como Usar

Para executar os testes, no terminal do diretório do projeto, utilize o comando:

npx cypress open

Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes desejados.

## Estrutura do Projeto

- **cypress** : Pasta principal que contém todos os testes e recursos relacionados ao Cypress.
- **e2e** : Contém os arquivos de teste propriamente ditos, como `trello_tests.cy.js`, que incluem os cenários de teste para a API do Trello.
- **reports** : Esta pasta armazena os relatórios de teste gerados.
  - **mocha** : Subdiretório para os relatórios gerados pelo Mochawesome, com arquivos `report.html` e `report.json` para visualização em formatos HTML e JSON, respectivamente.
- **support** : Inclui arquivos auxiliares e comandos customizados que podem ser reutilizados em vários testes, aumentando a reusabilidade e diminuindo a repetição de código.
  - `commands.js`: Define comandos personalizados do Cypress que podem ser usados em diversos testes.
  - `e2e.js`: Configurações específicas para os testes de ponta a ponta.
- **node_modules** : Diretório onde o npm armazena as dependências do projeto.
- **cypress.config.js** : Arquivo de configuração para o Cypress.
- **cypress.env.json** : Armazena as variáveis de ambiente sensíveis, como chaves de API e tokens, que são usadas nos testes.
- **package.json** & **package-lock.json** : Mantêm a lista de dependências do projeto e asseguram que a instalação dessas dependências seja consistente.
- **README.md** : Documentação markdown que explica o que o projeto faz, como ele é estruturado, e como configurar e executar os testes.

## Executando os Testes

Para executar todos os testes via linha de comando, sem abrir a interface do Cypress, use:

npx cypress run

## Contribuição

Instruções para quem deseja contribuir para o projeto. Por exemplo:

Para contribuir com o projeto, por favor, crie um fork do repositório, faça suas alterações e envie um Pull Request com uma descrição detalhada das mudanças propostas.
