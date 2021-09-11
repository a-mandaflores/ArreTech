const storeList = {
    get:{
        operationId: "store",
        description: "Listar Lojas",
        tags: ["Store"],
        parameters: [],
        responses: {
            200: {  
            description: "Ok",
                content: {
                    "Application/Json":{
                        schema:{
                            $ref: "#/components/schemas/Store"
                        }
                    }

                }
            }
        }
    },
}

module.exports = storeList