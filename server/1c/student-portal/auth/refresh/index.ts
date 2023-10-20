import fetch1c from '@/server/1c/fetch';

import { RefreshResponseBody } from './schema';

export const refreshUrl = '/refresh';

const refresh = (refresh_token: string) =>
  fetch1c<RefreshResponseBody>(refreshUrl, {
    headers: { Authorization: refresh_token },
    method: 'POST',
  });

export default refresh;
