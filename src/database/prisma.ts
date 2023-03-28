import { PrismaClient } from '@prisma/client';
import { IDatabaseConnector } from '../controllers/orm/protocols';

export class PrismaConnector implements IDatabaseConnector {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async connect(): Promise<void> {
    await this.client.$connect();
    console.log('Connected to prism!');
  }

  async disconnect(): Promise<void> {
    await this.client.$disconnect();
    console.log('Disconnected from Prisma!');
  }

  static async connect(): Promise<void> {
    const connector = new PrismaConnector();
    await connector.connect();
  }
}
