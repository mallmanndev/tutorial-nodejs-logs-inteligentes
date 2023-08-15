import Logger from "../Logger";
import IUsersRepo from "../contracts/IUsersRepo";
import User from "../entities/User";
import { v4 as uuid } from "uuid";

class UsersRepo implements IUsersRepo {
  private logger;
  private database: User[] = [];

  constructor() {
    this.logger = new Logger();
  }

  public async create(user: User): Promise<User> {
    const createUser = new User({ ...user, id: uuid() });

    this.database.push(createUser);

    this.logger.info(
      `Cliente inserido na base de dados! id: ${createUser.id} `
    );

    return createUser;
  }
}

export default UsersRepo;
