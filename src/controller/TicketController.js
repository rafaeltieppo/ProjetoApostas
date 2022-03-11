const Ticket = require('../model/Tickets');

const create = async (req, res) => {
    const data = req.body;

    const ret = await Ticket.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    const ret = await Ticket.findAll(id);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    const ret = await Ticket.update(data, {
        where: { id: id }
    });

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    let ret = await Ticket.destroy({
        where: { id: id }
    });

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
    remove,
}