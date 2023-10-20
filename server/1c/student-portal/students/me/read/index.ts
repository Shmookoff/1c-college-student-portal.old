import fetch1c from '@/server/1c/fetch';

import { protectedProcedure } from '../../../procedures';
import { StudentsMeReadResponseBody } from './schema';

export const studentsMeReadUrl = '/students/me';

const studentsMeRead = protectedProcedure((access_token: string) =>
  fetch1c<StudentsMeReadResponseBody>(studentsMeReadUrl, {
    headers: { Authorization: access_token },
  })
);

export default studentsMeRead;
