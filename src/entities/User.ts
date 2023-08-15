class User {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}

export default User;
