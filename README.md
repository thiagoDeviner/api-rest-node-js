Criar o arquivo package
npm init

//Gerencia as requisições, rotas e URLS, entre outras funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -d nodemon

//Instalar o mongoDB
npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos Javascript para que possam ser utilizados por sua aplicação
npm install --save mongoose

----------------------------
COMO RODAR O PROJETO BAIXADO 
----------------------------

//Instalar todas as dependencias indicadas pelo package.json
npm install

//Rodar o projeto usando o nodemon
nodemon app.js