# camp-21

Camp's folder structure

# Observações

- No arquivo .env, os valores das variáveis precisam ser de acordo com as que você possui no seu ambiante, o arquivo .env.example é so um modelo de quais variáveis são necessárias para o projeto.

# Sequelize

- O Sequelize é o ORM que utilizamos nesse projeto, ele nos ajuda facilitando a comunicação entre nossa aplicação e o banco de dados. Ele possui uma documentação bem completa que pode ser consultada no link abaixo.

- [Documentação](https://sequelize.org/master/)

- Lembrete: Para o Sequelize funcionar, você já precisa ter criado o banco que será utilizado, e depois só passar o nome desse banco no arquivo .env, a sua aplicação também vai precisar ter a lib do banco que você está utilizando, é possível ver um exemplo neste [link](https://sequelize.org/master/manual/getting-started.html) da documentação.

## Models

- Quando se cria um model pelo sequelize, ele automaticamente cria um arquivo de migration de acordo com os dados que você informou, por exemplo, criando o model de Usuario, com as colunas `name`, `email` e `password`, basta rodar o comando `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string`.

## Migrations

- Caso seja necessesário criar uma migration por fora, sem a necessidade de criar uma model, basta rodar o comando `npx sequelize-cli migration:generate --name create-table-name` e ele cria o arquivo dentro da pasta especificada na configuração no arquivo `.sequelizerc`

- Para executar as migrations, bata rodar o comando no terminal `npx sequelize-cli db:migrate`.

## Seeder

- O seeder são dados que precisamos criar no banco que vão ser necessários para o funcionamento, por exemplo, criar o primeiro usuário administrador no banco, para gerar um seed, basta rodar o comando `npx sequelize-cli seed:generate --name create-admin-user`.

- Para executar o seed, no terminal, rode o comando `npx sequelize-cli db:seed:all` que ele vai executar todos os seeds que ainda não foram rodados.

## Associações

- É possível fazer as associações entre as tabelas utilizando o sequelize, é preciso fazer uma configuração nas migrations, utilizando `references`, e nos models utilizando `belongs`, `hasMany` e `hasOne`. Neste [link](https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7) tem um artigo que explica como que funciona essas associações e o que é necessario fazer para elas funcionarem. Em caso de mais duvidas, na documentação do [Sequelize](https://sequelize.org/master/) tem explicações mais detalhadas de como funciona.

# Postman

- Este é o link da collection que criei no postman com as rotas de login e listagem de usuários, para utiliza-la basta abrir o postman e importar via link e colocar o seguinte link `https://www.getpostman.com/collections/baa8ef10267688f8fa9e`.
