import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserRepository } from 'src/infra/repositories/user/user.repository';
import { AuthenticationController } from 'src/interface/authentication/authentication.controller';
@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, UserRepository],
})
export class AuthenticationModule {}
