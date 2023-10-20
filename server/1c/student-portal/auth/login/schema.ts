import { Tokens } from '../schema';

export type LoginRequestBody = {
  login: string;
  password: string;
};

export type LoginResponseBody = Tokens;
