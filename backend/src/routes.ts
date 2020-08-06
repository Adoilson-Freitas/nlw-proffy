import express from 'express';
import ClassController from './controllers/ClassesControllers';

const routes = express.Router();
const classControllers = new ClassController();

routes.post('/classes', classControllers.create);

export default routes;