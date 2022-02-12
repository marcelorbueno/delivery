import { Router } from 'express';
import { ensureAuthenticateClient } from '../middleware/ensureAuthenticateClient';
import { AuthenticateClientController } from '../modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/services/createClient/CreateClientController';
import { FindAllDeliveriesController } from '../modules/clients/services/findAllDeliveries/FindAllDeliveriesController';

const clientRoutes = Router();

clientRoutes.post('/', new CreateClientController().handle);

clientRoutes.post('/authenticate/', new AuthenticateClientController().handle);

clientRoutes.get(
  '/deliveries/',
  ensureAuthenticateClient,
  new FindAllDeliveriesController().handle
);

export { clientRoutes };
