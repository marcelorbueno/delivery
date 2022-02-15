import { Delivery } from '@prisma/client';
import { prisma } from '../../../../prisma/prismaClient';

interface IRequest {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateService {
  public async execute({ id_delivery, id_deliveryman }: IRequest) {
    const delivery = await prisma.delivery.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: { end_at: new Date() },
    });

    return delivery;
  }
}
