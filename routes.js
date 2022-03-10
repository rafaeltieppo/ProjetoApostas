const express = require("express");
const route = express.Router(); 

const ClienteController = require('./src/controller/ClienteController');
const ApostaController = require('./src/controller/ApostaController');
const AssistenteController = require('./src/controller/AssistentesController');

route.post('/cliente', ClienteController.create);
route.get('/cliente', ClienteController.read);
route.put('/cliente/:id', ClienteController.update);
route.delete('/cliente/:id', ClienteController.remove);

route.post('/aposta', ApostaController.create);
route.get('/aposta', ApostaController.read);
route.put('/aposta/:id', ApostaController.update);
route.delete('/aposta/:id', ApostaController.remove);

route.post('/assistente', AssistenteController.create);
route.get('/assistente', AssistenteController.read)

module.exports = route;