import 'dotenv/config';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';

// Set Default Timezone
process.env.TZ = 'America/Sao_Paulo';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = 3333;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `🚀 Server started at ${new Date().toLocaleDateString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })} on Port ${port}!`,
  );
});
