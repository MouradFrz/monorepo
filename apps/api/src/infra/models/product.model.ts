import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from './user.model';
@Table({ modelName: 'products' })
export class Product extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column(DataTypes.STRING)
  sku: string;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: string;
}
