import { Injectable } from '@nestjs/common';
import { ENV } from './config/env';
@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return ENV.DB_PASSWORD;
  }
}
