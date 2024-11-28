const validaUsuario = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).send({ message: "O campo 'name' precisa ser preenchido"})
    }
    if(!req.body.email){
        return res.status(400).send({ message: "O campo 'email' precisa ser preenchido"})
    }
    if(!req.body.password){
        return res.status(400).send({ message: "O campo 'password' precisa ser preenchido"})
    }
    if(!req.body.images){
        return res.status(400).send({ message: "O campo 'images' precisa ser preenchido"})
    }
    if(!req.body.admin){
        return res.status(400).send({ message: "O campo 'admin' precisa ser preenchido"})
    }

    next();
}

module.exports = {
    validaUsuario
}