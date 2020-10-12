import { Router } from 'express';
import authMiddleware from './middlewares/authMiddleware';
import UserController from './controllers/UserController';
import LoginController from './controllers/LoginController';
import PostController from './controllers/PostController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/login', LoginController.store);


routes.get('/posts', authMiddleware, PostController.index);


export default routes;