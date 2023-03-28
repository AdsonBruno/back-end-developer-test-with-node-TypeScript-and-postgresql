import { PrismaClient } from '@prisma/client';
import {
  CreateClientParams,
  ICreateClientRepository,
} from '../../controllers/create-clients/protocols';
import { Client } from '../../models/clients';

export class PrismaCreateClient implements ICreateClientRepository {
  private prisma = new PrismaClient();

  async createClient(params: CreateClientParams): Promise<Client> {
    const client = await this.prisma.forms_Answers.create({
      data: {
        name: params.name,
        email: params.email,
        cpf: params.cpf,
        phone: params.phone,
      },
    });

    if (!client) {
      throw new Error('Não foi possível criar um cliente');
    }

    return {
      id: client.id,
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      createdAt: client.createdAt,
    };
  }
}
