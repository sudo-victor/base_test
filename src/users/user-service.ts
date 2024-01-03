
interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export class UserService {
  constructor(private repository: any) {}

  async create(params: CreateUserParams) {
    const userAlreadyExists = await this.repository.findByEmail(params.email)
    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const result = await this.repository.save(params)

    return result
  }

}