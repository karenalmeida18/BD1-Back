const { Router } = require('express');

const UserController = require('./controllers/userController');
const SessionController = require('./controllers/sessionController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

// User
routes.post('/user/register', UserController.create);
routes.get('/user/list', UserController.read);
routes.delete('/user/delete/:id', UserController.delete);
routes.put('/user/update', UserController.update);

routes.post('/user/login', SessionController.create);

module.exports = routes;
