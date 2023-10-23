import { isValid, parse, subDays } from 'date-fns';
import { redirect } from 'next/navigation';
import { FC } from 'react';

import GradesViewOnClient from './client';

export const getDefaultOptions = async () => {
  const to = new Date('2023-10-06');
  const from = subDays(to, 7);
  return { range: { from, to } };
};

const getOptions = (searchParams: { from?: string; to?: string }) => {
  if (searchParams.from && searchParams.to) {
    const fmt = 'yyyyMMdd';
    const base = new Date();
    const from = parse(searchParams.from, fmt, base);
    const to = parse(searchParams.to, fmt, base);

    if (isValid(from) && isValid(to)) return { range: { from, to } };
    redirect('/dashboard/grades');
  }
  return getDefaultOptions();
};

const GradesView: FC<{ from?: string; to?: string }> = async (searchParams) => {
  const defaultOptions = await getOptions(searchParams);
  return <GradesViewOnClient defaultOptions={defaultOptions} />;
};

export default GradesView;
