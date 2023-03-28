import express from 'express';
import { config } from 'dotenv';
import { GetClientsController } from './controllers/get-clients/get-clients';
import { PostgresClientsRepository } from './repositories/get-clients/postgres-get-clients';

config();

const app = express();

const port = process.env.PORT || 8000;

app.get('/clients', async (req, res) => {
  const postgresGetClientsRepository = new PostgresClientsRepository();

  const getClientsController = new GetClientsController(
    postgresGetClientsRepository
  );

  const { body, statusCode } = await getClientsController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
