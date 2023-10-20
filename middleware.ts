import { NextRequest, NextResponse } from 'next/server';

import * as middlewares from '@/server/middlewares';

import applySetCookie from './server/apply-set-cookie';

export const middleware = async (request: NextRequest) => {
  let response = NextResponse.next();

  for (const middleware of Object.values(middlewares)) {
    const middlewareResult = await middleware(request, response);
    if (middlewareResult) response = middlewareResult;
  }

  applySetCookie(request, response);

  return response;
};
