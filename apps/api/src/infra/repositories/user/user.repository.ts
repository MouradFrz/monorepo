import { Injectable } from '@nestjs/common';
import { User } from 'src/infra/models/user.model';
import type { FindOptions } from 'sequelize';
import { CreateUserAttributes } from './user.types';

@Injectable()
export class UserRepository {
  public async findAllByAttributes(attributes: FindOptions<User>): Promise<User[]> {
    return await User.findAll(attributes);
  }
  public async createUser(attributes: CreateUserAttributes) {
    return await User.create(attributes);
  }
}
