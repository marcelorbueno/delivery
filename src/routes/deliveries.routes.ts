import { Router } from 'express';
import { ensureAuthenticateClient } from '../middleware/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middleware/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/services/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/services/findAllWithoutEndDate/FindAllAvailableController';

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  ensureAuthenticateClient,
  new CreateDeliveryController().handle
);

deliveryRoutes.get(
  '/',
  ensureAuthenticateDeliveryman,
  new FindAllAvailableController().handle
);

export { deliveryRoutes };
