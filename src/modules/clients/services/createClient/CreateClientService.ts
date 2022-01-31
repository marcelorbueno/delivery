import { prisma } from "../../../../prisma/prismaClient";
import { hash } from 'bcrypt'

interface IRequest {
  username: string;
  password: string;
}

type Clients = {
  id: string;
  username: string;
  created_at: Date;
  updated_at: Date;
}

export class CreateClientService {
  public async execute({ username, password }: IRequest): Promise<Clients> {
    const clientExists = await prisma.clients.findFirst({
      where: { username: {
        mode: 'insensitive',
      } },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 8);

    return await prisma.clients.create({
      data: { username, password: hashPassword },
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    })
  }
}