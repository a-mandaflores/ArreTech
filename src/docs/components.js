const apicomponents = {
    components: {
        schemas:{
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
            
            UserList:{
                type: "array",
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
            }
        }

    }

}

module.exports = apicomponents