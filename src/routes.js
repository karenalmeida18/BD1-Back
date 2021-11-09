const { Router } = require('express');

import UserController from './controllers/userController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

// User
routes.post('/user/register', UserController.create);
routes.get('/user/list', ensureAuthMiddleware, UserController.read);
routes.delete('/user/delete/:id', ensureAuthMiddleware, UserController.delete);
routes.put('/user/update', ensureAuthMiddleware, UserController.update);


module.exports = routes;
