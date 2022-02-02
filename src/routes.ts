import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { CreateClientController } from './modules/clients/services/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/services/createDeliveryman/CreateDeliverymanController';

const routes = Router();

routes.post('/session/', new AuthenticateClientController().handle);

routes.post('/client/', new CreateClientController().handle);

routes.post('/deliveryman/', new CreateDeliverymanController().handle);

export { routes };
