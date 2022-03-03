const Cliente = require('../model/Cliente');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Cliente.create(data);

    res.json(ret);
}

module.exports = {
    create
}