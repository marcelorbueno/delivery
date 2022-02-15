import { Request, Response } from 'express';
import { FindAllDeliveriesDeliverymanService } from './FindAllDeliveriesDeliverymanService';

export class FindAllDeliveriesDeliverymanController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: id_deliveryman } = request.deliveryman;

    const findAllDeliveriesDeliverymanService =
      new FindAllDeliveriesDeliverymanService();

    const deliveries = await findAllDeliveriesDeliverymanService.execute(
      id_deliveryman,
    );

    return response.status(201).json(deliveries);
  }
}
