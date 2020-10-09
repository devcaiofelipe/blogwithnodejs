import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.send({ ok: false })
});

routes.get('/caio', (req, res) => {
  return res.send({ ok: 'pdc' })
})

export default routes;