import { format } from 'date-fns';
import useSWR from 'swr';

import { ScheduleByGroupForDateResponseBody } from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

export const useScheduleByGroupForDate = (groupId: string, date: Date) =>
  useSWR<ScheduleByGroupForDateResponseBody>(
    `/api/schedule/by-group-for-date/${groupId}/${format(date, 'yyyyMMdd')}`
  );
