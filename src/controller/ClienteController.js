const Cliente = require('../model/Cliente');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Cliente.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const ret = await Cliente.findAll(id);

    res.json(ret)
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body

    const ret = await Cliente.update(data);

    res.json(ret)
}

module.exports = {
    create,
    read
}