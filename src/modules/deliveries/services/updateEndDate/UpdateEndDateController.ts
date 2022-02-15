import { Request, Response } from 'express';
import { UpdateEndDateService } from './UpdateEndDateService';

export class UpdateEndDateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: id_delivery } = request.params;
    const { id: id_deliveryman } = request.deliveryman;

    const updateEndDateService = new UpdateEndDateService();

    const delivery = await updateEndDateService.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.status(201).json(delivery);
  }
}
