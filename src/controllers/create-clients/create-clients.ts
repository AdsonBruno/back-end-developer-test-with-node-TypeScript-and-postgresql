import { Client } from '../../models/clients';
import { HttpRequest, HttpResponse } from '../protocols';
import {
  CreateClientParams,
  ICreateClientController,
  ICreateClientRepository,
} from './protocols';
import isEmail from 'validator/lib/isEmail';

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

      if (!isEmail(httpRequest.body.email)) {
        return {
          statusCode: 400,
          body: 'Email inválido! Por favor, insira um email válido',
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
