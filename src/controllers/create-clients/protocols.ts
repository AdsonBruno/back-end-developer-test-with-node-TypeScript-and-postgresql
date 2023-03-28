import { Client } from '../../models/clients';

export interface CreateClientParams {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

export interface ICreateClientRepository {
  createClient(params: CreateClientParams): Promise<Client>;
}
