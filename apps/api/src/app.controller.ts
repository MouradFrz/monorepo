import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.model';
import { UserService } from './user/user.service';
import { IsDefined, IsOptional } from 'class-validator';
class CreateUserDto {
  @IsDefined()
  firstName: string;
  @IsDefined()
  lastName: string;
  @IsOptional()
  isActive: boolean;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getHello(@Query() query: { name: string }): Promise<User[]> {
    return await this.userService.getAllUsers(query);
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.createUser(body);
  }
}
