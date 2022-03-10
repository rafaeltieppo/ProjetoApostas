const Aposta = require('../model/Apostas');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Aposta.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const ret = await Aposta.findAll(id);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;
    
    let ret = await Aposta.update(data, {
        where: { id: id }
    });

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Aposta.destroy({
        where: { id: id }
    })

    if(ret == 1) {
        res.json({ id: id });
    }else {
        res.status(400).send();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}