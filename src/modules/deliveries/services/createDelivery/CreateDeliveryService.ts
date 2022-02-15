import { Delivery } from '@prisma/client';
import { prisma } from '@prismaClient/prismaClient';

interface IRequest {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryService {
  public async execute({ item_name, id_client }: IRequest): Promise<Delivery> {
    const delivery = await prisma.delivery.create({
      data: { item_name, id_client },
    });

    return delivery;
  }
}
