# sa-not-2024-2
Repositório da disciplina Segurança no Desenvolvimento de Aplicações, 5º semestre DSM noturno Fatec Franca 2024/2


***

## Class Anotations

Após clonar o repositório executamos o seguinte processo:

- Abrimos o terminal e executamos:
    ```bash 
    npx aka-demy/create-express-app
    ```

- O comando faz algumas perguntas que respondemos da seguinte maneira:
    - Ok to proceed? y
    - Give a name for the app: vulcom
    - Choose a language: JavaScript
    - Choose a template engine: EJS
    - Choose a package manager: npm

- Instalamos a extensão `EJS Language Support` de **DigitalBrainstem** no VS Code.

- Para executar a aplicação, navegamos para o diretório `vulcom` através do terminal e executamos:

    ```bash
    npm run dev
    ```

- Acessamos a página web `supabase.com` e logamos com o GitHub

- Em ``Create a new organization``, mantemos o padrão

- Nomeamos o projeto como ``Segurança Aplicações 2024/2``

- Definimos a região como ``South America (São Paulo)``

- Nas opções de menu, em **database**, criamos uma nova tabela chamada **users** e adicionamos 3 colunas:
    - id tipo int8 único e auto incremental;
    - username tipo texto not null;
    - password tipo texto not null

- Em seguida, no terminal, instalamos novas bibliotecas para utilizar o banco de dados:

    ```bash
    npm install dotenv postgres
    ```