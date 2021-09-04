const app = require("../../server")

const userRoute = app =>{
    app.get("/userHistory", (request, response) => response.send("userHistory"));
    app.post("/createUser", (request, response) => response.send("createUser"));
}

module.exports = userRoute