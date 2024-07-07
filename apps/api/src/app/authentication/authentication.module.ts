import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserRepository } from 'src/infra/repositories/user/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from 'src/interface/authentication/authentication.controller';
import { ENV } from 'src/config/env';

@Module({
  imports: [JwtModule.register({ secret: ENV.JWT_SECRET })],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserRepository],
})
export class AuthenticationModule {}
