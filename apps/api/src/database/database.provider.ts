import { Sequelize } from 'sequelize-typescript';
import { ENV } from '../config/env';
import tedious from 'tedious';

import { User } from 'src/infra/models/user.model';
import { Product } from 'src/infra/models/product.model';
/**
 * SEQUELIZE variable is stored in a file named
 * 'constants' so it can be easily reused anywhere
 * without being subject to human error.
 */

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        logging: false,
        dialect: 'mssql',
        host: ENV.DB_HOST,
        port: Number(ENV.DB_PORT),
        username: ENV.DB_USERNAME,
        password: ENV.DB_PASSWORD,
        database: ENV.DB_NAME,
        dialectModule: tedious,
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });

      sequelize.addModels([User, Product]);
      return sequelize;
    },
  },
];
