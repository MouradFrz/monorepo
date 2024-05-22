export type EnvVariables = {
  DB_NAME: string;
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
};

export enum EnvErrorsNames {
  ENV_VARIABLE_NOT_DEFINED = 'ENV_VARIABLE_NOT_DEFINED',
}

export class EnvironementError extends Error {
  name: EnvErrorsNames;
  message: string;

  constructor({ name, message }: { name: EnvErrorsNames; message: string }) {
    super();
    this.name = name;
    this.message = message;
  }
}
