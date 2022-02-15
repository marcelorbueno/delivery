import { Router } from 'express';
import { ensureAuthenticateClient } from '../middleware/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middleware/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/services/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/services/findAllAvailable/FindAllAvailableController';
import { UpdateDeliveryController } from '../modules/deliveries/services/updateDelivery/UpdateDeliveryController';
import { UpdateEndDateController } from '../modules/deliveries/services/updateEndDate/UpdateEndDateController';

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  ensureAuthenticateClient,
  new CreateDeliveryController().handle,
);

deliveryRoutes.get(
  '/',
  ensureAuthenticateDeliveryman,
  new FindAllAvailableController().handle,
);

deliveryRoutes.put(
  '/id/:id',
  ensureAuthenticateDeliveryman,
  new UpdateDeliveryController().handle,
);

deliveryRoutes.put(
  '/updateenddate/:id',
  ensureAuthenticateDeliveryman,
  new UpdateEndDateController().handle,
);

export { deliveryRoutes };
