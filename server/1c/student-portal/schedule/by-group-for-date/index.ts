import fetch1c from '@/server/1c/fetch';

import { publicProcedure } from '../../procedures';
import { ScheduleByGroupForDateResponseBody } from './schema';

export const byGroupForDateUrl = '/schedule';

const generateScheduleByGroupForDateUrl = (groupId: string, date: string) =>
  `/schedule/${groupId}/${date}`;

const scheduleByGroupForDate = publicProcedure(
  (groupId: string, date: string) =>
    fetch1c<ScheduleByGroupForDateResponseBody>(
      generateScheduleByGroupForDateUrl(groupId, date)
    )
);

export default scheduleByGroupForDate;
