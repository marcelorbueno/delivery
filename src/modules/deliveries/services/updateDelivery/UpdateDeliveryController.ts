import { Request, Response } from "express";
import { UpdateDeliveryService } from "./UpdateDeliveryService";

export class UpdateDeliveryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: id_delivery } = request.params;
    const { id: id_deliveryman } = request.deliveryman;

    const updateDeliveryService = new UpdateDeliveryService();

    const delivery = await updateDeliveryService.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.status(201).json(delivery);
  }
}