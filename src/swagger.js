const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/routes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "ArreTech: API ECommerce ",
        description: "Api Ecommerce para o projeto final da aceleração <b> Luiza Code. </b>"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        },
        {
            "name": "Product",
            "description": "Endpoints"
        },
        {
            "name": "Store",
            "description": "Endpoints"
        },
        {
            "name": "Item",
            "description": "Endpoints"
        },
        {
            "name": "Order",
            "description": "Endpoints"
        }
    ],
    definitions: {
        User: {
            name: "Nome do usuário",
            email: "Email do usuário",
            password: "Senha do usuário"

        },
        Product: {
            id: 1,
            description: "TV Samsung",
            producer: "Samsung",
            price: 2219.00
        },
        AddUser: {
            $name: "Nome novo usuário",
            $email: "usuario@email.com",
            $password: "Senha do usuário"
        },
        UserLogin: {
            $email: "usuario@email.com",
            $password: "Senha do usuário"
        },
        Store: {
            id: 1,
            name: "Santo Amaro, Loja 1",
            city: "São Paulo",
            state: "SP",
            manager: "Gerente"
        },
        Item: {
            product: 1,
            quantity: 2,
            price: 12.5,
            totalPrice: 25
        },
        AddItem: {
            product: 1,
            quantity: 2
        },
        Order: {
            id: 1,
            user: 1,
            amount: 25.0,
            status: 'em análise'

        }
    },
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        },
        apiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "authorization",
            description: 'Insira seu token para garantir acesso aos endpoints'
        }
    },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js')
})