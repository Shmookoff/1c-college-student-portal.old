import fetch1c from '@/server/1c/fetch';

import { publicProcedure } from '../../procedures';
import type { LoginRequestBody, LoginResponseBody } from './schema';

const loginUrl = '/login';

const login = publicProcedure((body: LoginRequestBody) =>
  fetch1c<LoginResponseBody>(loginUrl, {
    body: JSON.stringify(body),
    method: 'POST',
  })
);

export default login;
