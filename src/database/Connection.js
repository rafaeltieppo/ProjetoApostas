require('dotenv').config();
const { Sequelize } = require('sequelize');

const Cliente = require('../model/Cliente');
// const Aposta = require('../model/Apostas');
// const Assistente = require('../model/Assistentes');
// const Team = require('../model/Teams');
// const Ticket = require('../model/Tickets');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER ,'', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    Cliente.init(sequelize);

    sequelize.sync({ force : true });
}

module.exports = {
    sequelize,
    sync
} 