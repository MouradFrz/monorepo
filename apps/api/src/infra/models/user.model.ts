import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/infra/models/product.model';

@Table({ modelName: 'Users' })
export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  flags: string;

  @Column
  role: string;

  @Column({ defaultValue: true })
  isActive: boolean;
  @HasMany(() => Product)
  products: Product[];
}
