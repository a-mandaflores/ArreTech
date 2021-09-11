const userList = {
    get:{
        operationId: "userList",
        description: "Listar usuarios",
        tags: ["Users"],
        parameters: [],
        responses: {
            200: {  
            description: "Listar todos os usuarios",
                content: {
                    "Aplication/Json":{
                        schema:{
                            $ref: "#/components/schemas/UserList"
                        }
                    }

                }
            }
        }
    },
};

module.exports = userList