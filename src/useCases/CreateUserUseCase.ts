import Logger from "../Logger";
import IUsersRepo from "../contracts/IUsersRepo";
import User from "../entities/User";

class CreateUserUseCase {
  private logger;
  constructor(private usersRepo: IUsersRepo) {
    this.logger = new Logger();
  }

  public async execute(user: User): Promise<User> {
    if (!user) {
      this.logger.error("Usuário inválido!");
      throw new Error("Usuário inválido!");
    }
    if (!user.name) {
      this.logger.error("Nome inválido!");
      throw new Error("Nome inválido!");
    }

    if (!user.email) {
      this.logger.error("Email inválido!");
      throw new Error("Email inválido!");
    }

    const createUser = await this.usersRepo.create(user);
    return createUser;
  }
}

export default CreateUserUseCase;
