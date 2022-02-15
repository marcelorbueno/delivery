import { Request, Response } from 'express';
import { FindAllAvailableService } from './FindAllAvailableService';

export class FindAllAvailableController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllAvailableService = new FindAllAvailableService();

    const deliveries = await findAllAvailableService.execute();

    return response.status(201).json(deliveries);
  }
}
