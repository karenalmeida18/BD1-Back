const { Router } = require('express');

const UserController = require('./controllers/userController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

// User
routes.post('/user/register', UserController.create);
routes.get('/user/list', UserController.read);
routes.delete('/user/delete/:id', UserController.delete);
routes.put('/user/update', UserController.update);


module.exports = routes;
