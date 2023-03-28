import { IGetClientsController, IGetClientsRepository } from './protocols';

export class GetClientsController implements IGetClientsController {
  constructor(private readonly getClientsRepository: IGetClientsRepository) {
    this.getClientsRepository = getClientsRepository;
  }

  async handle() {
    try {
      const clients = await this.getClientsRepository.getClients();

      return {
        statusCode: 200,
        body: clients,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Algo deu errado',
      };
    }
  }
}
