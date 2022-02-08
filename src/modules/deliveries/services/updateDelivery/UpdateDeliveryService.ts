import { Delivery } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliveryService {
  public async execute({ id_delivery, id_deliveryman }: IRequest): Promise<Delivery> {


    const delivery = await prisma.delivery.update({
      where: {
        id: id_delivery,
      },
      data: { id_deliveryman },
    });

    return delivery;
  }
}