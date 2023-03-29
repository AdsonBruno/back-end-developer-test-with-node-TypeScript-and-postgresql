import { Client } from '../../models/clients';
import { HttpRequest, HttpResponse } from '../protocols';
import {
  CreateClientParams,
  ICreateClientController,
  ICreateClientRepository,
} from './protocols';

export class CreateClientController implements ICreateClientController {
  constructor(
    private readonly createClientRepository: ICreateClientRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateClientParams>
  ): Promise<HttpResponse<Client>> {
    try {
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: 'por favor especifique um body',
        };
      }

      const client = await this.createClientRepository.createClient(
        httpRequest.body
      );

      return {
        statusCode: 201,
        body: client,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Algo deu errado',
      };
    }
  }
}
