import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';

import { CreateClientController } from './modules/clients/services/createClient/CreateClientController';

const routes = Router();

routes.post('/sessions/', new AuthenticateClientController().handle);

routes.post('/clients/', new CreateClientController().handle);

export { routes };
