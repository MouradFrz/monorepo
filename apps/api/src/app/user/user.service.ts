import { Injectable } from '@nestjs/common';
import { User } from 'src/infra/models/user.model';
export type UserCreateAttributes = {
  firstName: string;
  lastName: string;
  isActive: boolean;
};
@Injectable()
export class UserService {
  constructor() {}
  public async getAllUsers(param: { name: string }): Promise<User[]> {
    const user = User.findAll({
      include: [],
      where: {
        ...(param.name ? { firstName: param.name } : {}),
      },
    });
    return user;
  }
  public async createUser(newUserAttributes: UserCreateAttributes): Promise<User> {
    return await User.create(newUserAttributes);
  }
}
