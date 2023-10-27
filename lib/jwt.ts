import jwtDecode from 'jwt-decode';

export const getTokenCookieOptions = (token: string) => {
  const payload = jwtDecode<{ exp: number }>(token);
  return {
    expires: payload.exp * 1000,
    httpOnly: true,
    // secure: true,
  };
};
