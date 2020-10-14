import { Router } from 'express';
import authMiddleware from './middlewares/authMiddleware';
import UserController from './controllers/UserController';
import LoginController from './controllers/LoginController';
import PostController from './controllers/PostController';
import CreateAdminController from './controllers/CreateAdminController';
import CommentController from './controllers/CommentController';

const routes = new Router();

routes.post('/user/create', UserController.store);
routes.post('/user/login', LoginController.store);

routes.get

routes.post('/admin', CreateAdminController.store);
routes.post('/admin/login', LoginController.store);
routes.get('/admin/users', authMiddleware, UserController.index);
routes.get('/admin/posts', authMiddleware, PostController.index);
routes.post('/admin/post/create', authMiddleware, PostController.store);

routes.get('/posts', PostController.index);
routes.post('/posts/:postId/comment', authMiddleware, CommentController.store);


export default routes;