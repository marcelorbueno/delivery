import { Router } from 'express';

import { clientRoutes } from './clients.routes';
import { deliveryRoutes } from './deliveries.routes';
import { deliverymanRoutes } from './deliverymans.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/deliverymans', deliverymanRoutes);
routes.use('/deliveries', deliveryRoutes);

export { routes };
