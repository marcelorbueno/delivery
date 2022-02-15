import { Request, Response } from 'express';
import { CreateDeliverymanService } from './CreateDeliverymanService';

export class CreateDeliverymanController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createDeliverymanService = new CreateDeliverymanService();

    const deliveryman = await createDeliverymanService.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}
