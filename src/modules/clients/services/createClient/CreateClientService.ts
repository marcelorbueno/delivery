import { hash } from 'bcrypt';
import { prisma } from '../../../../prisma/prismaClient';

interface IRequest {
  username: string;
  password: string;
}

type Client = {
  id: string;
  username: string;
  created_at: Date;
  updated_at: Date;
};

export class CreateClientService {
  public async execute({ username, password }: IRequest): Promise<Client> {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 8);

    const client = await prisma.client.create({
      data: { username, password: hashPassword },
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });

    return client;
  }
}
