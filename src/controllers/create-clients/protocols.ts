import { Client } from '../../models/clients';
import { HttpRequest, HttpResponse } from '../protocols';

export interface ICreateClientController {
  handle(
    httpRequest: HttpRequest<CreateClientParams>
  ): Promise<HttpResponse<Client>>;
}

export interface CreateClientParams {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

export interface ICreateClientRepository {
  createClient(params: CreateClientParams): Promise<Client>;
}
