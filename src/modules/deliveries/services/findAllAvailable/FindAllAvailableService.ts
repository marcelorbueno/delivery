import { Delivery } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";

export class FindAllAvailableService {
  public async execute(): Promise<Delivery[]> {

    const deliveries = await prisma.delivery.findMany({
      where: { end_at: null, id_deliveryman: null },
    });

    return deliveries;
  }
}