import { Router } from 'express';

import { clientRoutes } from './clients.routes';
import { deliverymanRoutes } from './deliveryman.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/deliverymans', deliverymanRoutes);

export { routes };
