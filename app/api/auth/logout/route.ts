import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const POST = async () => {
  try {
    const refreshToken = cookies().get('RefreshToken');
    if (refreshToken) {
      await studentPortalApi.auth.logout(refreshToken.value);
      cookies().delete('AccessToken');
      cookies().delete('RefreshToken');
    }
    return NextResponse.json(null);
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
    console.error(error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
};
