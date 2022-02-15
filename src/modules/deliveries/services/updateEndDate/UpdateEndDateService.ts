import { Delivery } from '@prisma/client';
import { prisma } from '@prismaClient/prismaClient';

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateService {
  public async execute({
    id_delivery,
    id_deliveryman,
  }: IRequest): Promise<Delivery> {
    const existentDelivery = await prisma.delivery.findFirst({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
    });

    if (!existentDelivery) {
      throw new Error('Delivery not found');
    }

    if (existentDelivery.end_at) {
      throw new Error('Delivery finished');
    }

    const delivery = await prisma.delivery.update({
      where: {
        id: id_delivery,
      },
      data: { end_at: new Date() },
    });

    return delivery;
  }
}
