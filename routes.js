const express = require("express");
const route = express.Router(); 

const ClienteController = require('./src/controller/ClienteController');
const ApostaConttoller = require('./src/controller/ApostaController')

route.post('/cliente', ClienteController.create);
route.get('/cliente', ClienteController.read);

route.post('/aposta', ApostaConttoller.create);
route.get('/aposta', ApostaConttoller.read);

module.exports = route;