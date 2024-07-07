import { IsDefined, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  firstName: string;
  @IsDefined()
  lastName: string;
  @IsOptional()
  isActive: boolean;
}

export class CredentialsDto {
  @IsDefined()
  email: string;
  @IsDefined()
  password: string;
}
