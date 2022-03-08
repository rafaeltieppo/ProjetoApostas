const Aposta = require('../model/apostas');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Aposta.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const ret = await Aposta.read(id)

    res.json(ret);
}

module.exports = {
    create,
    read
}