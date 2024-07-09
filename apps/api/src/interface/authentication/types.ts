import { type Request as BasicRequest } from 'express';
import { User } from 'src/infra/models/user.model';
export type Request = BasicRequest & { user: User };
