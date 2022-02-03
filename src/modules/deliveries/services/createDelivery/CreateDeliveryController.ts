import { Request, Response } from "express";
import { CreateDeliveryService } from "./CreateDeliveryService";

export class CreateDeliveryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const { id: id_client } = request.client;

    const createDeliverymanService = new CreateDeliveryService();

    const deliveryman = await createDeliverymanService.execute({ item_name, id_client });

    return response.status(201).json(deliveryman);
  }
}