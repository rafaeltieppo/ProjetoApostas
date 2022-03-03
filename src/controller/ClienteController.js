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

module.exports = {
    create,
    read
}