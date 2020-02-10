import { Router } from 'express';
import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Pedro Henrique',
//     email: 'pedroteste@gmail.com',
//     password_hash: '123456',
//   });

//   return res.json(user);
// });

export default routes;
