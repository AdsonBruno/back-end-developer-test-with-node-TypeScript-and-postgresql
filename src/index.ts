import express from 'express';
import { config } from 'dotenv';
import { GetClientsController } from './controllers/get-clients/get-clients';
import { PrismaClientsRepository } from './repositories/get-clients/prisma-get-clients';
import { PrismaConnector } from './database/prisma';
import { CreateClientController } from './controllers/create-clients/create-clients';
import { PrismaCreateClient } from './repositories/create-clients/prisma-create-clients';

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await PrismaConnector.connect();

  app.get('/clients', async (req, res) => {
    const prismaGetClientsRepository = new PrismaClientsRepository();

    const getClientsController = new GetClientsController(
      prismaGetClientsRepository
    );

    const { body, statusCode } = await getClientsController.handle();

    res.send(body).status(statusCode);
  });

  app.get('/clients/:start/:end', async (req, res) => {
    const { start, end } = req.params;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const prismaGetClientsRepository = new PrismaClientsRepository();

    const getClientsController = new GetClientsController(
      prismaGetClientsRepository
    );

    const { body, statusCode } =
      await getClientsController.handleClientsAtRange(startDate, endDate);

    res.send(body).status(statusCode);
  });

  app.post('/clients', async (req, res) => {
    const prismaCreateClientRepository = new PrismaCreateClient();
    const createClientController = new CreateClientController(
      prismaCreateClientRepository
    );

    const { body, statusCode } = await createClientController.handle({
      body: req.body,
    });

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
