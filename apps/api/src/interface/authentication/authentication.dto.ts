import { IsDefined, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  firstName: string;
  @IsDefined()
  lastName: string;
  @IsOptional()
  isActive: boolean;
}
