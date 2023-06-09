import { Client } from '../../models/clients';
import { HttpResponse } from '../protocols';

export interface IGetClientsController {
  handle(): Promise<HttpResponse<Client[]>>;
}

export interface IGetClientsRepository {
  getClients(): Promise<Client[]>;
}
