const product = {
    get:{
        operationId: "productList",
        description: "Listar produtos",
        tags: ["Product"],
        parameters: [],
        responses: {
            200: {  
            description: "Ok",
                content: {
                    "Aplication/Json":{
                        schema:{
                            $ref: "#/components/schemas/Product"
                        }
                    }

                }
            }
        }
    },
}

module.exports = product