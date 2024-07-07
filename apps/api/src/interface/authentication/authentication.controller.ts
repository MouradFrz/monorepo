import { Controller, Get, Post, Body, Req, Request } from '@nestjs/common';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { CreateUserDto, CredentialsDto } from './authentication.dto';
import { pick } from 'lodash';
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
}
