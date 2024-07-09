import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/user/user.module';
import { DatabaseModule } from './database/database.module';

import { ProductModule } from './app/product/product.module';

import { AuthenticationModule } from './app/authentication/authentication.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, DatabaseModule, ProductModule, AuthenticationModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
