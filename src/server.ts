import 'dotenv/config';

import express from 'express';
import { routes } from './routes';

// Set Default Timezone
process.env.TZ = 'America/Sao_Paulo';

const app = express();

app.use(express.json());
app.use(routes);

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
