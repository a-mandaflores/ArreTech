module.exports = function (app) {
	
    app.get('/users/:id', (req, res) => {
	    
	const filtro = req.query.filtro

        return res.status(404).send(false)

    })

}