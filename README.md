
# Task Master Frontend

Este é o frontend do projeto **Task Master**, uma aplicação de gerenciamento de tarefas construída com **React** e **Material-UI**.

## Requisitos

Antes de começar, você precisa ter o seguinte instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/task-master-frontend.git
   cd task-master-frontend

    Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

    npm start

    O aplicativo estará disponível em http://localhost:3000.

Funcionalidades

    Visualização de tarefas: Exibe todas as tarefas criadas, com a opção de marcá-las como concluídas.

    Criação de tarefas: Permite adicionar novas tarefas com título e descrição.

    Edição de tarefas: Permite editar tarefas já criadas.

    Filtragem de tarefas: Exibe tarefas filtradas por status (pendente ou concluída).

    Design responsivo: Utiliza o Material-UI para criar uma interface limpa e responsiva.

Estrutura do Projeto

    src/: Contém os arquivos de código-fonte.

        components/: Componentes reutilizáveis como botões, campos de texto, etc.

        pages/: Páginas principais da aplicação (ex. Lista de Tarefas, Criação de Tarefa).

        services/: Arquivo para configurar a comunicação com o backend via API.

        App.js: O componente raiz da aplicação.

    public/: Arquivos públicos, incluindo o index.html principal.

Integração com o Backend

Este frontend se comunica com o backend do Task Master. Certifique-se de que o backend esteja rodando antes de testar o frontend.

Para configurar o backend, siga as instruções no README do Backend.

A URL base da API está configurada no arquivo src/services/axios.js:

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Altere se necessário para a URL do seu backend
});

Dependências

    React: Biblioteca JavaScript para construir interfaces de usuário.

    Material-UI: Framework de componentes React para criar interfaces modernas.

    Axios: Cliente HTTP para fazer requisições API.
