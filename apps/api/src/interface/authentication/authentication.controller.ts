import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { Request } from './types';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { CreateUserDto, CredentialsDto } from './authentication.dto';
import { pick } from 'lodash';
import { AuthGuard } from 'src/app/guards/AuthGuard';
import { User } from 'src/infra/models/user.model';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Get('')
  public getAllusers() {
    return this.authService.getAllUsers({});
  }

  @Post('')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.createUser(createUserDto);
    return pick(user, ['firstName', 'lastName', 'isActive']);
  }

  @Post('login')
  public async login(
    @Body() credentials: CredentialsDto,
    @Req() request: Request,
  ): Promise<{ accessToken: string; userId: number }> {
    return this.authService.logUserIn(credentials);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  public async me(@Req() request: Request): Promise<User> {
    return request.user;
  }
}
