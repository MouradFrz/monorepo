import { Sequelize } from 'sequelize-typescript';
import { ENV } from 'src/config/env';
import { User } from 'src/user/user.model';

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
        dialect: 'mssql',
        host: ENV.DB_HOST,
        port: Number(ENV.DB_PORT),
        username: ENV.DB_USERNAME,
        password: ENV.DB_PASSWORD,
        database: ENV.DB_NAME,
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to
       * Sequelize later on.
       */
      sequelize.addModels([User]);

      // await sequelize.sync();
      return sequelize;
    },
  },
];