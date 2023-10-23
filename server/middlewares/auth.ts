import jwtDecode from 'jwt-decode';
import { NextRequest, NextResponse } from 'next/server';

import { getTokenCookieOptions } from '@/lib/jwt';

import { studentPortalApi } from '../1c';

const skipUrls = ['/_next', '/favicon.ico', '/login'];

const refresh = async (refreshToken: string, response: NextResponse) => {
  const refreshResponse = await studentPortalApi.auth.refresh(refreshToken);

  response.cookies.set(
    'AccessToken',
    refreshResponse.access_token,
    getTokenCookieOptions(refreshResponse.access_token)
  );
  response.cookies.set(
    'RefreshToken',
    refreshResponse.refresh_token,
    getTokenCookieOptions(refreshResponse.refresh_token)
  );
  return response;
};

const authMiddleware = async (request: NextRequest, response: NextResponse) => {
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
      return await refresh(refreshToken.value, response);
  }

  if (!accessToken && refreshToken)
    return await refresh(refreshToken.value, response);

  return response;
};

export default authMiddleware;
