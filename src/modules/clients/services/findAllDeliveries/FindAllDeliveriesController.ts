import { Request, Response } from "express";
import { FindAllDeliveriesService } from "./FindAllDeliveriesService";

export class FindAllDeliveriesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: id_client } = request.client;

    const findAllDeliveriesService = new FindAllDeliveriesService();

    const deliveries = await findAllDeliveriesService.execute(id_client);

    return response.status(201).json(deliveries);
  }
}