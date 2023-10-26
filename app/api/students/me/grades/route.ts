import { isValid, parse } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const searchParams = {
    start: request.nextUrl.searchParams.get('start'),
    end: request.nextUrl.searchParams.get('end'),
  };

  if (!searchParams.start || !searchParams.end) {
    return NextResponse.json('specify period start and end', { status: 400 });
  }

  const fmt = 'yyyyMMdd';
  const start = parse(searchParams.start, fmt, new Date());
  const end = parse(searchParams.end, fmt, new Date());
  if (!isValid(start) || !isValid(end))
    return NextResponse.json('Date must be in format yyyyMMdd', {
      status: 400,
    });
  try {
    const response = await studentPortalApi.students.me.grades(start, end);
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
    console.error(error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
};
