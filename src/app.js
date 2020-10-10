import express from 'express';
import routes from './routes';
import './database';

class Application {
  constructor() {
    this.server = express();
    this.server.listen(3333);
    this.server.use(express.json());
    this.server.use(routes);
  };
};

const app = new Application();

