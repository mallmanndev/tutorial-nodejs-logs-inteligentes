import CreateUserUseCase from "../useCases/CreateUserUseCase";
import IUsersRepo from "../contracts/IUsersRepo";
import User from "../entities/User";
import Logger from "../Logger";

type TControllerResponse = {
  status: number;
  data: object;
};

class CreateUserController {
  private logger;
  private createUserUseCase;

  constructor(usersRepo: IUsersRepo) {
    this.logger = new Logger();
    this.createUserUseCase = new CreateUserUseCase(usersRepo);
  }

  public async handle(data: any): Promise<TControllerResponse> {
    this.logger.info("Iniciando cadastro de usuário!")
    try {
      const user = await this.createUserUseCase.execute(new User(data));

      return { status: 200, data: user };
    } catch (error) {
      this.logger.error("Não foi possível cadastraro o usuário")
      this.logger.error(String(error));
      return {
        status: 400,
        data: { message: "Não foi possível cadastrar o usuário." },
      };
    }
  }
}

export default CreateUserController;
