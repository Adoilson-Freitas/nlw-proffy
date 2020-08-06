import express from 'express';
import ClassController from './controllers/ClassesControllers';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classControllers = new ClassController();
const connectionController = new ConnectionController();

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;