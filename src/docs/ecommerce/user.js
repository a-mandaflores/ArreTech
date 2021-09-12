const user = {
    post: {
        operationId: "createUser",
        description: "Criar usuario",
        tags: ["User"],
        requestBody: {
            content: {
                "Application/Json": {
                    schema: {
                        $ref: "#/components/schemas/User"
                    },
                },
            }
        },
        responses: { }
    },
    get: {
        operationId: "userList",
        description: "Listar usuarios",
        tags: ["User"],
        parameters: [],
        responses: {
            200: {
                description: "Ok",
                content: {
                    "Application/Json": {
                        schema: {
                            $ref: "#/components/schemas/User"
                        }
                    }

                }
            }
        }
    },
};

module.exports = user;