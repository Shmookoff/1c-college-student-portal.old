import jwtDecode from 'jwt-decode';
import { NextRequest } from 'next/server';

import { getTokenCookieOptions } from '@/lib/jwt';

import { studentPortalApi } from '../1c';

const skipUrls = ['/_next', '/favicon.ico', '/login'];

const refresh = async (refreshToken: string) => {
  try {
    const refreshResponse = await studentPortalApi.auth.refresh(refreshToken);
    const cookies = [
      {
        name: 'AccessToken',
        value: refreshResponse.access_token,
        ...getTokenCookieOptions(refreshResponse.access_token),
      },
      {
        name: 'RefreshToken',
        value: refreshResponse.refresh_token,
        ...getTokenCookieOptions(refreshResponse.refresh_token),
      },
    ];

    return { cookies };
  } catch {}
};

const authMiddleware = async (request: NextRequest) => {
  const skipUrlsMatches = skipUrls.map((url) =>
    request.nextUrl.pathname.startsWith(url)
  );
  if (skipUrlsMatches.some((v) => v === true)) return;

  const accessToken = request.cookies.get('AccessToken');
  const refreshToken = request.cookies.get('RefreshToken');

  if (accessToken && refreshToken) {
    const current = new Date();
    const decodedAccess = jwtDecode<{ exp: number }>(accessToken.value);
    if (decodedAccess.exp * 1000 - current.getTime() < 10000)
      return await refresh(refreshToken.value);
  }

  if (!accessToken && refreshToken) return await refresh(refreshToken.value);
};

export default authMiddleware;
