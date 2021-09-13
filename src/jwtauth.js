require("dotenv").config();
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.headers['authorization']

    if (token != undefined) {
        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                res.status(401).json('Token inválido!')
            } else {
                req.token = token
                //req.userId = user.id //user contém id e email do usuário logado
                req.userId = user.id
                next()
            }
        })
    } else {
        res.status(401).json('Token inválido!')
    }
    /*
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id
      next();
    });*/
}

module.exports = auth
