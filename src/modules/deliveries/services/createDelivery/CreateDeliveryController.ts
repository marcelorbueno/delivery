import { Request, Response } from 'express';
import { CreateDeliveryService } from './CreateDeliveryService';

export class CreateDeliveryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const { id: id_client } = request.client;

    const createDeliveryService = new CreateDeliveryService();

    const delivery = await createDeliveryService.execute({
      item_name,
      id_client,
    });

    return response.status(201).json(delivery);
  }
}
