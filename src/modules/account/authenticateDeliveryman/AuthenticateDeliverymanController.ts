import { Request, Response } from 'express';
import { AuthenticateDeliverymanService } from './AuthenticateDeliverymanService';

class AuthenticateDeliverymanController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateUserService = new AuthenticateDeliverymanService();

    const { deliveryman, token } = await authenticateUserService.execute({
      username,
      password,
    });

    return response.json({ deliveryman, token });
  }
}

export { AuthenticateDeliverymanController };
