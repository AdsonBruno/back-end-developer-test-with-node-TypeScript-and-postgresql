import express from 'express';
import { config } from 'dotenv';
import { GetClientsController } from './controllers/get-clients/get-clients';
import { PrismaClientsRepository } from './repositories/get-clients/prisma-get-clients';
import { PrismaConnector } from './database/prisma';

const main = async () => {
  config();

  const app = express();

  await PrismaConnector.connect();

  app.get('/clients', async (req, res) => {
    const prismaGetClientsRepository = new PrismaClientsRepository();

    const getClientsController = new GetClientsController(
      prismaGetClientsRepository
    );

    const { body, statusCode } = await getClientsController.handle();

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
