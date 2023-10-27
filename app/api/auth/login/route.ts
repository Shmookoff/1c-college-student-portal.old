import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { getTokenCookieOptions } from '@/lib/jwt';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const response = await studentPortalApi.auth.login(body);
    cookies().set({
      name: 'AccessToken',
      value: response.access_token,
      ...getTokenCookieOptions(response.access_token),
    });
    cookies().set({
      name: 'RefreshToken',
      value: response.refresh_token,
      ...getTokenCookieOptions(response.refresh_token),
    });
    return new NextResponse();
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
    console.error(error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
};
