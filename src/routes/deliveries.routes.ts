import { Router } from 'express';
import { ensureAuthenticateClient } from '../middleware/ensureAuthenticateClient';
import { CreateDeliveryController } from '../modules/deliveries/services/createDelivery/CreateDeliveryController';

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  ensureAuthenticateClient,
  new CreateDeliveryController().handle
);

export { deliveryRoutes };
