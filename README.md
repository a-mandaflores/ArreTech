
<div align="center">
<img src= "https://user-images.githubusercontent.com/72309611/132760748-6cdc92b6-3979-41e2-b384-70bbc92fb299.jpeg"
width='350px'>

</div>
<br>


## **Indíce**
> - Sobre
> - Tecnologias utilizadas
> - Instalação e configuração
> - Arquitetura
> - Rotas

<br>
<br>
<br>


# 🛒 **API OMNI CHANNEL** 

**Omni channel** é um contexto utilizado para a definição de estratégias do varejo que permeiam diversos canais de interação com clientes, como ações online e offline.

A **API omni channel** tem como funcionalidade suprir a necessidade de aplicar regras de vendas distintas ou em catálogos de produtos específicos, atendendo os serviços de :

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



# 👩‍💻 Tecnologias utilizadas 

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

# 🛠 Instalação e configuração
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
Criar, através de seu gerenciador do mysql, o seguinte banco de dados:

```bash
db_arretech
```

Iniciar projeto, atualizar o swagger e subir as migrations:

```bash
$ yarn start
```
<br>

## Acesso ao swagger:


# 📂 Arquitetura

A estrutura foi organizada em camadas para ter a devida separação por tarefas e facilitar a compreensão  das lógicas, e regras de negócios exigidas.<br>
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
   |              |- 📄 1631534253127-tableProduct.js
                  |- 📄 1631536530354-tableUser.js
                  |- 📄 1631536822918-tableStore.js
                  |- 📄 1631538116639-tableOrder.js
                  |- 📄 1631538823893-tableOrderItem.js
   |         |- 📄 database.js
   |
   |    |- 📁 entities
   |         |- 📄 orderEntity.js
   |         |- 📄 orderItemEntity.js
   |         |- 📄 productEntity.js
   |         |- 📄 storeEntity.js
   |         |- 📄 userEntity.js
   |
   |    |- 📁 routes
   |         |- 📄 itemRouter.js
   |         |- 📄 orderRouter.js
   |         |- 📄 productRouter.js
   |         |- 📄 storeRouter.js
   |         |- 📄 userRouter.js
   | 
        |- 📄 app.js
        |- 📄 jwtauth.js
        |- 📄 swagger_output.json
        |- 📄 swagger.js
   |     
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 ormconfig.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 yarn-error.log
   |- 📄 yarn.lock
```

<br>

# 🚧 Rotas

Rota para cadastrar novo cliente : 
```JS
 POST  http://localhost:3000/user
```

Rota para logar cliente :
```JS
GET  http://localhost:3000/user/login
```

Rota para cliente visualizar seu histórico de pedidos :
```JS
GET  http://localhost:3000/user/orders/:userId
```

Rota para listar produtos :
```JS
GET  http://localhost:3000/product
```

Rota para listar lojas :
```JS
GET  http://localhost:3000/store
```

Rota para adicionar item a lista de pedido:
```JS
POST http://localhost:3000/item
```

Rota para remover item da lista de pedido:
```JS
DELETE http://localhost:3000/item/:itemId
```

Rota para criar pedido e adicionar os itens :
```JS
POST  http://localhost:3000/order
```

Rota para finalizar compra :
```JS
POST http://localhost:3000/order/checkout
```

<br>
<br>

 ### criado por 💜 ArreTech

 PARTICIPANTES      | GITHUB
   ---------        |  ------
Amanda Flores       | https://github.com/a-mandaflores
Andreia Magalhães   | https://github.com/andreamontenegromagalhaes
Carol Nappo         | https://github.com/aanacarolina
Juci Leal           | https://github.com/LealJP
Rafaela Ferreira    | https://github.com/rafaeladpferreira




