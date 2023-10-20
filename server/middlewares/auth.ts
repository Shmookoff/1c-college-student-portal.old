import { NextRequest, NextResponse } from 'next/server';

import { getTokenCookieOptions } from '@/lib/jwt';

import { studentPortalApi } from '../1c';

const skipUrls = ['/api', '/_next', '/favicon.ico', '/login'];

const authMiddleware = async (request: NextRequest, response: NextResponse) => {
  const skipUrlsMatches = skipUrls.map((url) =>
    request.nextUrl.pathname.startsWith(url)
  );
  if (skipUrlsMatches.some((v) => v === true)) return;

  const accessToken = request.cookies.get('AccessToken');
  if (accessToken) return;

  const refreshToken = request.cookies.get('RefreshToken');
  if (!refreshToken) return;

  try {
    const refreshResponse = await studentPortalApi.auth.refresh(
      refreshToken.value
    );
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
  } catch {}

  return response;
};

export default authMiddleware;
