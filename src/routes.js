import { Router } from 'express';
import authMiddleware from './middlewares/authMiddleware';
import UserController from './controllers/UserController';
import LoginController from './controllers/LoginController';
import PostController from './controllers/PostController';
import CreateAdminController from './controllers/CreateAdminController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/login', LoginController.store);
routes.post('/admin', CreateAdminController.store);


routes.get('/posts', authMiddleware, PostController.index);


export default routes;