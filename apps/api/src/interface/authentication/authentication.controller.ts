import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Product } from 'src/infra/models/product.model';
import { CreateUserDto } from './authentication.dto';
import { pick } from 'lodash';
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Get('')
  public getAllusers() {
    return this.authService.getAllUsers({ attributes: ['firstName'], include: [{ model: Product }] });
  }

  @Post('')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.createUser(createUserDto);
    return pick(user, ['firstName', 'lastName', 'isActive']);
  }
}
