import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface ITokenPayload {
  sub: string;
}

export function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: 'Token not provided' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub: deliveryman_id } = verify(
      token,
      authConfig.jwt.deliveryman_secret_token,
    ) as ITokenPayload;

    request.deliveryman = {
      id: deliveryman_id,
    };

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Invalid token' });
  }
}
