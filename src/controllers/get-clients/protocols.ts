import { Client } from '../../models/clients';
import { HttpResponse } from '../protocols';

export interface IGetClientsController {
  handle(): Promise<HttpResponse<Client[]>>;
  handleClientsAtRange(
    startDate: Date,
    endDate: Date
  ): Promise<HttpResponse<Client[]>>;
}

export interface IGetClientsRepository {
  getClients(): Promise<Client[]>;
  getClientsAtRange(startDate: Date, endDate: Date): Promise<Client[]>;
}
