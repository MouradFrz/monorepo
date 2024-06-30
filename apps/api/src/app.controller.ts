import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './infra/models/user.model';
import { UserService } from './app/user/user.service';
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
  constructor() {}
}
