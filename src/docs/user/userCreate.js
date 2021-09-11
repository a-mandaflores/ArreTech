const user = require(".");
const { components } = require("../components");

const userCreate = {
    post:{
        operationId: "createUser",
        description: "Criar usuario",
        tags: ["Users"],
        requestBody: {
            content: {
                "Aplication/Json": {                            
                    schema:{
                        $ref: "#/components/schemas/User" 
                    },                        
                },
            }  
        },
    },
};

module.exports = userCreate