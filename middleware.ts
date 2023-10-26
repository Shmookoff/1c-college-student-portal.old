import {
  RequestCookies,
  ResponseCookie,
} from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

import * as middlewares from '@/server/middlewares';

export const middleware = async (request: NextRequest) => {
  const cookies: ResponseCookie[] = [];

  for (const middleware of Object.values(middlewares)) {
    const middlewareResult = await middleware(request);
    if (!middlewareResult) continue;
    cookies.push(...middlewareResult.cookies);
  }

  const combinedRequestHeaders = new Headers(request.headers);
  const requestCookies = new RequestCookies(combinedRequestHeaders);
  cookies.forEach((cookie) => requestCookies.set(cookie));

  const response = NextResponse.next({
    request: { headers: combinedRequestHeaders },
  });
  cookies.forEach((cookie) => response.cookies.set(cookie));
  return response;
};
