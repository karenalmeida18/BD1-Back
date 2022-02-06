const { Router } = require('express');

const UserController = require('./controllers/userController');
const SessionController = require('./controllers/sessionController');
const AnimalsController = require('./controllers/animalsController');
const MessagesController = require('./controllers/messagesController');

const ensureAuthMiddleware = require('./middlewares/ensureAuth');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

// User
routes.post('/user/register', UserController.create);
routes.get('/user/list', UserController.read);
routes.delete('/user/delete/:id', ensureAuthMiddleware, UserController.delete);
routes.put('/user/update', ensureAuthMiddleware, UserController.update);

// Session
routes.post('/user/login', SessionController.create);

// Animals
routes.post('/animals/register', ensureAuthMiddleware, AnimalsController.create);
routes.get('/animals/list', AnimalsController.read);
routes.delete('/animals/delete/:id', ensureAuthMiddleware, AnimalsController.delete);
routes.put('/animals/update', ensureAuthMiddleware, AnimalsController.update);

// Messages
routes.post('/messages/register/:id', ensureAuthMiddleware ,MessagesController.create);
routes.get('/messages/list/:id', ensureAuthMiddleware ,MessagesController.read);
routes.delete('/messages/delete/:id', ensureAuthMiddleware, MessagesController.delete);

module.exports = routes;
