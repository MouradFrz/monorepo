import { Injectable, HttpStatus } from '@nestjs/common';
import { UserRepository } from 'src/infra/repositories/user/user.repository';
import { User } from 'src/infra/models/user.model';
import type { FindOptions } from 'sequelize';
import { CreateUserAttributes } from 'src/infra/repositories/user/user.types';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}
  public async getAllUsers(options: FindOptions<User>): Promise<User[]> {
    return this.userRepository.findAllByAttributes(options);
  }
  public async createUser(attributes: CreateUserAttributes): Promise<User> {
    return await this.userRepository.createUser(attributes);
  }

  public async logUserIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ accessToken: string; userId: number }> {
    const [user] = await this.userRepository.findAllByAttributes({ where: { email } });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);

    return { accessToken: this.jwtService.sign({ id: user.id, role: user.role, flags: user.flags }), userId: user.id };
  }
}
