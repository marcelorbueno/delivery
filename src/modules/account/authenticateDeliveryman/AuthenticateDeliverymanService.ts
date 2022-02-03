import { prisma } from "../../../prisma/prismaClient";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import authConfig from '../../../config/auth'

interface IAuhenticateDeliverymanRequest {
  username: string;
  password: string;
}

interface IResponse {
  deliveryman: {
    id: string,
    username: string,
    created_at: Date,
    updated_at: Date,
  };
  token: string;
}

export class AuthenticateDeliverymanService {
  public async execute({ username, password }: IAuhenticateDeliverymanRequest): Promise<IResponse> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          contains: username,
        }
      },
    });

    if (!deliveryman) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, deliveryman.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const { deliveryman_secret_token, expiresIn } = authConfig.jwt;

    const token = sign({
      username: deliveryman.username,
    }, deliveryman_secret_token, {
      subject: deliveryman.id,
      expiresIn,
    });


    return {
      deliveryman: {
        id: deliveryman.id,
        username: deliveryman.username,
        created_at: deliveryman.created_at,
        updated_at: deliveryman.updated_at,
      },
      token,
    };
  }
}