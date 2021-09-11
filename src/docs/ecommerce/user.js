const user = {
    post:{
        operationId: "createUser",
        description: "Criar usuario",
        tags: ["Users"],
        requestBody: {
            content: {
                "Application/Json": {                            
                    schema:{
                        $ref: "#/components/schemas/User" 
                    },                        
                },
            }  
        },
    },
    get:{
        operationId: "userList",
        description: "Listar usuarios",
        tags: ["Users"],
        parameters: [],
        responses: {
            200: {  
            description: "Listar todos os usuarios",
                content: {
                    "Application/Json":{
                        schema:{
                            $ref: "#/components/schemas/UserList"
                        }
                    }

                }
            }
        }
    },
};

module.exports = user;