import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { setToken } from '@/lib/jwt';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const response = await studentPortalApi.auth.login(body);
    setToken('AccessToken', response.access_token, cookies().set);
    setToken('RefreshToken', response.refresh_token, cookies().set);
    return new NextResponse();
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
  }
};
