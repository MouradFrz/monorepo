import { EnvErrorsNames, EnvVariables, EnvironementError } from './env.types';

const throwIfUndefined = (value: string) => {
  if (!process.env[value]) {
    throw new EnvironementError({
      name: EnvErrorsNames.ENV_VARIABLE_NOT_DEFINED,
      message: `${value} needs to be defined, and it is not.`,
    });
  }
};

const checkEnv = (): EnvVariables => {
  const ENV: EnvVariables = {
    DB_NAME: process.env.DB_NAME as unknown as string,
    DB_HOST: process.env.DB_HOST as unknown as string,
    DB_USERNAME: process.env.DB_USERNAME as unknown as string,
    DB_PASSWORD: process.env.DB_PASSWORD as unknown as string,
    DB_PORT: process.env.DB_PORT as unknown as string,
  };
  // for (const envkey of Object.keys(ENV)) {
  //   throwIfUndefined(envkey);
  // }
  return ENV;
};

export const ENV = checkEnv();
