import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliverymans/services/createDeliveryman/CreateDeliverymanController';

const deliverymanRoutes = Router();

deliverymanRoutes.post('/authenticate/', new AuthenticateDeliverymanController().handle);
deliverymanRoutes.post('/', new CreateDeliverymanController().handle);

export { deliverymanRoutes };
