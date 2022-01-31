import { prisma } from "../../../prisma/prismaClient";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import authConfig from '../../../config/auth'
import { Clients } from "@prisma/client";

interface IAuhenticateClientRequest {
  username: string;
  password: string;
}

interface IResponse {
  client: {
    id: string,
    username: string,
    created_at: Date,
    updated_at: Date,
  };
  token: string;
}

export class AuthenticateClientService {
  public async execute({ username, password }: IAuhenticateClientRequest): Promise<IResponse> {
    const client = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          contains: username,
        }
      },
    });

    if (!client) {
      throw new Error('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, client.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    const { secret_token, expiresIn } = authConfig.jwt;

    const token = sign({
      username: client.username,
    }, secret_token, {
      subject: client.id,
      expiresIn,
    });


    return {
      client: {
        id: client.id,
        username: client.username,
        created_at: client.created_at,
        updated_at: client.updated_at,
      },
      token,
    };
  }
}