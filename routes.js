const express = require("express");
const route = express.Router(); 

const ClienteController = require('./src/controller/ClienteController');

route.post('/cliente', ClienteController.create);
route.get('/cliente', ClienteController.read);

module.exports = route;