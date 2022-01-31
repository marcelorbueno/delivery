import { AuthenticateClientService } from './AuthenticateClientService';
import { Request, Response } from 'express';

class AuthenticateClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateUserService = new AuthenticateClientService();

    const { client, token } = await authenticateUserService.execute({
      username,
      password,
    });

    return response.json({ client, token });
  }
}

export { AuthenticateClientController };
