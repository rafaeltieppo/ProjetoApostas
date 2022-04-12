require('dotenv').config();
const { Sequelize } = require('sequelize');

const Cliente = require('../model/Cliente');
const Aposta = require('../model/Apostas');
const Assistente = require('../model/Assistentes');
const Team = require('../model/Teams');
const Ticket = require('../model/Tickets');
const ClienteAposta = require('../model/clienteAposta');
const Login = require("../model/Login")

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER ,'', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
       timestamps: false,
    }
});

const sync = () => {
    Cliente.init(sequelize);
    Team.init(sequelize);
    Aposta.init(sequelize);
    Assistente.init(sequelize);
    Ticket.init(sequelize);
    ClienteAposta.init(sequelize);
    Login.init(sequelize);

    Cliente.associate(sequelize.models);
    Team.associate(sequelize.models);
    Aposta.associate(sequelize.models);
    Ticket.associate(sequelize.models);
    ClienteAposta.associate(sequelize.models);    
    Assistente.associate(sequelize.models);

    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
} 