import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/repositories/user/user.repository';
import { User } from 'src/infra/models/user.model';
import type { FindOptions } from 'sequelize';
import { CreateUserAttributes } from 'src/infra/repositories/user/user.types';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {}
  public async getAllUsers(options: FindOptions<User>): Promise<User[]> {
    return this.userRepository.findAllByAttributes(options);
  }
  public async createUser(attributes: CreateUserAttributes): Promise<User> {
    return await this.userRepository.createUser(attributes);
  }
}
