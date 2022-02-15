import { Delivery } from '@prisma/client';
import { prisma } from '@prismaClient/prismaClient';

interface IResponse {
  id: string;
  username: string;
  created_at: Date;
  updated_at: Date;
  delivery: Delivery[];
}

export class FindAllDeliveriesDeliverymanService {
  public async execute(id_deliveryman: string): Promise<IResponse[]> {
    const deliveries = await prisma.deliveryman.findMany({
      where: { id: id_deliveryman },
      select: {
        id: true,
        username: true,
        created_at: true,
        updated_at: true,
        delivery: true,
      },
    });

    return deliveries;
  }
}
