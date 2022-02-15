import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../middleware/ensureAuthenticateDeliveryman';
import { AuthenticateDeliverymanController } from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliverymans/services/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from '../modules/deliverymans/services/findAllDeliveries/FindAllDeliveriesController';

const deliverymanRoutes = Router();

deliverymanRoutes.post(
  '/authenticate/',
  new AuthenticateDeliverymanController().handle,
);
deliverymanRoutes.post('/', new CreateDeliverymanController().handle);

deliverymanRoutes.get(
  '/deliveries/',
  ensureAuthenticateDeliveryman,
  new FindAllDeliveriesDeliverymanController().handle,
);

export { deliverymanRoutes };
