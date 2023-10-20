import jwtDecode from 'jwt-decode';

export const setToken = (
  name: 'AccessToken' | 'RefreshToken',
  token: string,
  set: (
    name: 'AccessToken' | 'RefreshToken',
    value: string,
    options: { expires: number; httpOnly: boolean; secure: boolean }
  ) => any
) => {
  const payload = jwtDecode<{ exp: number }>(token);
  set(name, token, {
    expires: payload.exp * 1000,
    httpOnly: true,
    secure: true,
  });
};

export const getTokenCookieOptions = (token: string) => {
  const payload = jwtDecode<{ exp: number }>(token);
  return {
    expires: payload.exp * 1000,
    httpOnly: true,
    secure: true,
  };
};
