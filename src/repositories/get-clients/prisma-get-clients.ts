import {
  PrismaClient,
  Forms_Answers as PrismaClientModel,
} from '@prisma/client';
import { IGetClientsRepository } from '../../controllers/get-clients/protocols';
import { Client } from '../../models/clients';

export class PrismaClientsRepository implements IGetClientsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getClients(): Promise<Client[]> {
    const clients = await this.prisma.forms_Answers.findMany();

    return clients.map((client: PrismaClientModel) => ({
      id: client.id,
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      createdAt: client.createdAt,
    }));
  }

  async getClientsAtRange(startDate: Date, endDate: Date): Promise<Client[]> {
    const clients: PrismaClientModel[] =
      await this.prisma.forms_Answers.findMany({
        where: {
          AND: [
            { createdAt: { gte: startDate } },
            { createdAt: { lte: endDate } },
          ],
        },
      });

    return clients.map((client: PrismaClientModel) => ({
      id: client.id,
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      createdAt: client.createdAt,
    }));
  }
}
