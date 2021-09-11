const storeList = {
    get:{
        operationId: "storeList",
        description: "Listar lojas",
        tags: ["Stores"],
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
}

module.exports = storeList