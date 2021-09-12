
<div align="center">
<img src= "https://user-images.githubusercontent.com/72309611/132760748-6cdc92b6-3979-41e2-b384-70bbc92fb299.jpeg"
width='350px'>

</div>
<br>


## **Indíce**
#### - [Sobre](#-API-OMNI-CHANNEL)
#### - [Tecnologias utilizadas](#-Tecnologias-utilizadas)
#### - [Instalação e configuração](#-Instalação-e-configuração)
#### - [Arquitetura](#-Arquitetura)
#### - [Rotas](#-Rotas)

<br>
<br>
<br>


# **API OMNI CHANNEL** 

A API omni channel tem como funcionalidade suprir a necessidade de aplicar regras de vendas distintas ou em catálogos de produtos específicos, atendendo os serviços de :

- Adicionar um produto na lista da compra da cliente;
- Remover um produto da lista da compra da cliente; 
- Consultar todos os produtos disponíveis; 
- Consultar a lista de compras da cliente;
- Consultar todas as lojas;
- Cadrastrar novo cliente;
- Consultar todas as compras realizadas da cliente;
- Finalizar compra;
<br>
<br>
<br>


# Tecnologias utilizadas 

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `typeORM` | Framework de ORM (Object-Relational Mapping, em português, mapeamento objeto-relacional) para projetos.|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `yarn` | Gerenciador de pacotes|
| `MySQL` |Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface.|
| `MySQL Workbench` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia / Postman` | Interface gráfica para realizar os testes|
<br>

# Instalação e configuração
## Pré-requisitos:

É necessário instalar [MySql](https://dev.mysql.com/downloads/installer/) versão 8.0, [NodeJS](https://nodejs.org/pt-br/download/) versão14.17.6 e [Git](http://git-scm.com/downloads) versão 2.33.0 para a instalação do projeto. <br>
(_os links apresentados para download são válidos em 13/09/2021_)

<br> 
Clonar o repositório:

```bash
$ git clone https://github.com/a-mandaflores/ArreTech.git
```
Entrar no diretório:

```bash
$ cd ArreTech
```
Instalar as dependências:

```bash
$ yarn install
```
Iniciar projeto:

```bash
$ yarn start
```

<br>

# Arquitetura

A estrutura foi organizada em camadas para ter a devida separação por tarefas e facilitar a compreensão  das lógicas, e regras de negócios exigidas.
Apesar de aumentar a configuração inicial, essa arquitetura irá garantir facilidade de manutenção do código, escalabilidade, entre outras vantagens a médio e longo prazo.

<br>



```
📁 ArreTech
   |
   |- 📄 node_modules
   |
   |-  📁 src
   |     |- 📁 controllers
   |         |- 📄 orderController.js
   |         |- 📄 productCrontroller.js
   |         |- 📄 storeController.js|  
   |         |- 📄 userController.js
   |    
   |    |- 📁 data
   |         |- 📁 migrations
   |              |- 📄 1631117654278-InsertTableProduct.js
   |         |- 📄 databaseIndex.js
   |
   |    |- 📁 entities
   |         |- 📄 orderEntity.js
   |         |- 📄 orderItemEntity.js
   |         |- 📄 productEntity.js
   |         |- 📄 storeEntity.js
   |         |- 📄 userEntity.js
   |
   |    |- 📁 routes
   |         |- 📄 indexRoute.js
   |         |- 📄 orderRoute.js
   |         |- 📄 productRoute.js
   |         |- 📄 storeRoute.js
   |         |- 📄 userRoute.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 ormconfig.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 yarn-error.log
   |- 📄 yarn.lock
```

<br>

# Rotas

Rota para criar clientes : 
```js
 POST  http://localhost:9090/user
```

Rota para listar clientes :
```JS
GET  http://localhost:9090/user
```

Rota para criar produtos :
```JS
POST  http://localhost:9090/product
```

Rota para listar produtos :
```JS
GET  http://localhost:9090/product
```

Rota para listar lojas :
```JS
GET  http://localhost:9090/store
```

Rota para criar pedido e adicionar itens :
```JS
POST  http://localhost:9090/order
```

Rota para listar histórico do cliente :
```JS
GET  http://localhost:9090/order/:userId
```

Rota para adicionar item :
```JS
POST http://localhost:9090/item
```

Rota para excluir item :
```JS
DELETE http://localhost:9090/item/:itemId
```


Rota para adicionar produtos na lista de pedido de um cliente :
```JS
POST  http://localhost:9090/item//addProduct/:user_id
```

Rota para remover produto da lista de pedido de um cliente :
```JS
DELETE http://localhost:9090/item//removeProduct/:user_id
```

Rota para finalizar compra :
```JS
POST http://localhost:9090/item//checkout/:user_id
```
 verificar se são 12 ou 13 rotas**

 ### criado por 💜 ArreTech

 PARTICIPANTES      | GITHUB
   ---------        |  ------
Amanda Flores       | https://github.com/a-mandaflores
Andreia Magalhães   | https://github.com/andreamontenegromagalhaes
Carol Nappo         | https://github.com/aanacarolina
Juci Leal           | https://github.com/LealJP
Rafaela Ferreira    | https://github.com/rafaeladpferreira




