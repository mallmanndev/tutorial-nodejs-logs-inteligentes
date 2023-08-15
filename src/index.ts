import express, { Request, Response } from "express";
import CreateUserController from "./controllers/CreateUserController";
import UsersRepo from "./repositories/UsersRepo";
import { start as startCID } from "./correlationId";
import { v4 as uuid } from "uuid";

const app = express();
const port = 3000;

const usersRepo = new UsersRepo();
const createUserController = new CreateUserController(usersRepo);

app.use(express.json());

app.post("/user", async (req: Request, res: Response) => {
  const cid = uuid();

  startCID(cid);

  const { body } = req;

  const response = await createUserController.handle(body);

  res.status(response.status).send(response.data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
