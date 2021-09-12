const apicomponents = {
    components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    name: {
                        types: "string",
                        description: "Nome do usuario a ser criado",
                        example: "Amanda"
                    },
                    email: {
                        types: "string",
                        description: "Email do usuario a ser criado",
                        example: "amanda@gmail.com"
                    }

                }

            },
            Store: {
                type: "object",
                properties: {
                    name: {
                        types: "string",
                        description: "Nome da loja",
                        //example: "Tv 40° polegadas"
                    },
                    city: {
                        types: "string",
                        description: "Cidade",
                       // example: "Televizão 40 polegadas"
                    },
                    state: {
                        types: "string",
                        description: "Estado",
                        //example: "Magazine Luiza"
                    },
                    manager: {
                        types: "string",
                        description: "Gerente",
                        //example: "1.200"
                    }

                }
            },
            Product:{
                type: "object",
                properties: {
                    name: {
                        types: "string",
                        description: "Nome do produto",
                        example: "Tv 40° polegadas"
                    },
                    description: {
                        types: "string",
                        description: "Descrição do produto",
                        example: "Televizão 40 polegadas"
                    },
                    producer: {
                        types: "string",
                        description: "Fabricante do produto",
                        example: "Magazine Luiza"
                    },
                    price: {
                        types: "string",
                        description: "Preço do produto",
                        example: "1.200"
                    }   
                    
                }
            }
        }
    }

}

module.exports = apicomponents