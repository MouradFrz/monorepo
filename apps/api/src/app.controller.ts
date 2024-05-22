import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './services/user.service';
import { User } from './models/user.model';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  postFunction(): void {
    return;
  }
}
