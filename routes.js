const express = require("express");
const route = express.Router(); 

const ClienteController = require('./src/controller/ClienteController');
const ApostaController = require('./src/controller/ApostaController');
const AssistenteController = require('./src/controller/AssistentesController');
const TeamController = require('./src/controller/TeamsController');
const TicketController = require('./src/controller/TicketController');

route.post('/cliente', ClienteController.create);
route.get('/cliente', ClienteController.read);
route.put('/cliente/:id', ClienteController.update);
route.delete('/cliente/:id', ClienteController.remove);

route.post('/aposta', ApostaController.create);
route.get('/aposta', ApostaController.read);
route.put('/aposta/:id', ApostaController.update);
route.delete('/aposta/:id', ApostaController.remove);

route.post('/assistente', AssistenteController.create);
route.get('/assistente', AssistenteController.read);
route.put('/assistente/:id', AssistenteController.update);
route.delete('/assistente/:id', AssistenteController.remove);


route.post('/team', TeamController.create);
route.get('/team', TeamController.read);
route.put('/team/:id', TeamController.update);
route.delete('/team/:id', TeamController.remove);

route.post('/ticket', TicketController.create);
route.get('/ticket', TicketController.read);
route.put('/ticket/:id', TicketController.update);
route.delete('/ticket/:id', TicketController.remove);

module.exports = route;