import User from "../entities/User";

interface IUsersRepo {
  create(user: User): Promise<User>;
}

export default IUsersRepo;
