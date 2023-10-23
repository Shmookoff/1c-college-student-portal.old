import fetch1c from '@/server/1c/fetch';

export const refreshUrl = '/logout';

const logout = (refresh_token: string) =>
  fetch1c(refreshUrl, {
    headers: { Authorization: refresh_token },
    method: 'POST',
  });

export default logout;
