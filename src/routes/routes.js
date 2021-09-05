const userRoute = app =>{
    app.get("/userHistory", (_request, response) => response.send("Deu certo o userHistory"));
    app.post("/createUser", (_request, response) => response.send("Deu certo o createUser"));
}

module.exports = userRoute