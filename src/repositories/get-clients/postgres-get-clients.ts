import { IGetClientsRepository } from '../../controllers/get-clients/protocols';
import { Client } from '../../models/clients';

export class PostgresClientsRepository implements IGetClientsRepository {
  async getClients(): Promise<Client[]> {
    return [
      {
        name: 'Adson',
        cpf: '123456758',
        email: 'adsonbruno2@gmail.com',
        phone: '82999809999',
      },
    ];
  }
}
