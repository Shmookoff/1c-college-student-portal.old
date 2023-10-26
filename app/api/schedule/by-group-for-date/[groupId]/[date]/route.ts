import { isValid, parse } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

import { studentPortalApi } from '@/server/1c';
import { Fetch1CError } from '@/server/1c/error-schema';

export const dynamic = 'force-dynamic';

export const GET = async (
  request: NextRequest,
  { params }: { params: { groupId: string; date: string } }
) => {
  const fmt = 'yyyyMMdd';
  const date = parse(params.date, fmt, new Date());

  if (!isValid(date))
    return NextResponse.json('Date must be in format yyyyMMdd', {
      status: 400,
    });
  try {
    const response = await studentPortalApi.schedule.byGroupForDate(
      params.groupId,
      params.date
    );
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Fetch1CError)
      return NextResponse.json(error.text, { status: error.response.status });
    console.error(error);
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
};
