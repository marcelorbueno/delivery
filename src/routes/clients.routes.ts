import { Router } from 'express';
import { AuthenticateClientController } from '../modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/services/createClient/CreateClientController';

const clientRoutes = Router();

clientRoutes.post('/', new CreateClientController().handle);
clientRoutes.post('/authenticate/', new AuthenticateClientController().handle);

export { clientRoutes };
