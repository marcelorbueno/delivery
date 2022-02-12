import { Client, Delivery } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";

interface IResponse {
  id: string;
  username: string;
  created_at: Date;
  updated_at: Date;
  delivery: Delivery[];
}

export class FindAllDeliveriesService {
  public async execute(id_client: string): Promise<IResponse[]> {

    const deliveries = await prisma.client.findMany({
      where: { id: id_client },
      select: {
        id: true,
        username: true,
        created_at: true,
        updated_at: true,
        delivery: true,
      }
    });

    return deliveries;
  }
}