import { isValid, parse } from 'date-fns';
import { redirect } from 'next/navigation';
import { FC } from 'react';

import { studentPortalApi } from '@/server/1c';

import ScheduleViewOnClient from './client';

export const getDefaultOptions = async () => {
  const user = await studentPortalApi.students.me.read();
  const date = new Date('2023-10-09');
  return {
    groupId: user.group_id,
    date: date,
  };
};

const getOptions = (searchParams: { groupId?: string; date?: string }) => {
  if (searchParams?.date && searchParams.groupId) {
    const date = parse(searchParams.date, 'yyyyMMdd', new Date());
    if (isValid(date))
      return {
        groupId: searchParams.groupId,
        date,
      };
    redirect('/dashboard/schedule');
  }
  return getDefaultOptions();
};

const ScheduleView: FC<{ groupId?: string; date?: string }> = async (
  searchParams
) => {
  const defaultOptions = await getOptions(searchParams);
  return <ScheduleViewOnClient defaultOptions={defaultOptions} />;
};

export default ScheduleView;
