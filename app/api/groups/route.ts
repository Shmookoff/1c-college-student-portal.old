import { NextResponse } from 'next/server';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const GET = async () => {
  try {
    const response = await studentPortalApi.groups.list();
    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
  }
};
