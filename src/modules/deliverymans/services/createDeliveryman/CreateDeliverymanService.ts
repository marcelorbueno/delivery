import { prisma } from "../../../../prisma/prismaClient";
import { hash } from 'bcrypt'

interface IRequest {
  username: string;
  password: string;
}

type Deliveryman = {
  id: string;
  username: string;
  created_at: Date;
  updated_at: Date;
}

export class CreateDeliverymanService {
  public async execute({ username, password }: IRequest): Promise<Deliveryman> {
    const DeliverymanExists = await prisma.deliveryman.findFirst({
      where: { username: {
        mode: 'insensitive',
      } },
    });

    if (DeliverymanExists) {
      throw new Error('Deliveryman already exists');
    }

    const hashPassword = await hash(password, 8);

    const deliveryman = await prisma.deliveryman.create({
      data: { username, password: hashPassword },
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });

    return deliveryman;
  }
}