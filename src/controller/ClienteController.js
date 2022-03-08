const Cliente = require('../model/Cliente');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Cliente.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const ret = await Cliente.read(id);

    res.json(ret);
}


const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Cliente.update(data, {
        where: {id: id}
    });

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params

    const ret = await Cliente.destroy({
        where: {id: id}
    })

    if(ret == 1) {
        res.json({id:id});
    }else {
        res.status(400).send();
    }
}

const login = async (req, res) => {
    const data = req.body;

    const ret = await Usuario.findAll({
        where: {
            email: data.email,
            senha: data.senha
        }
    })

    res.json(ret);
} 

module.exports = {
    create,
    read,
    update,
    remove,
    login
}