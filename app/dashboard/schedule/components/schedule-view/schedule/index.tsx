'use client';

import { type FC } from 'react';

import { useScheduleByGroupForDate } from '@/lib/hooks/api/use-schedule';

import type {
  ClassSchema,
  ScheduleByGroupForDateResponseBody,
} from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

import Period, { PeriodLoading } from './period';

const Schedule: FC<{ groupId: string; date: Date }> = ({ groupId, date }) => {
  const { data: schedule, isLoading } = useScheduleByGroupForDate(
    groupId,
    date
  );

  const scheduleToPeriods = (schedule: ScheduleByGroupForDateResponseBody) =>
    schedule.reduce((acc, scheduledClass) => {
      const classesBySubgroup = acc.get(scheduledClass.class_number);
      if (classesBySubgroup)
        classesBySubgroup.set(scheduledClass.subgroup, scheduledClass);
      else
        acc.set(
          scheduledClass.class_number,
          new Map([[scheduledClass.subgroup, scheduledClass]])
        );
      return acc;
    }, new Map<number, Map<number, ClassSchema>>());

  return (
    <div className="flex flex-col gap-y-4">
      {schedule ? (
        [...scheduleToPeriods(schedule)].map(([classNumber, classes]) => (
          <Period
            key={classNumber}
            classNumber={classNumber}
            classes={classes}
          />
        ))
      ) : isLoading ? (
        <ScheduleLoading />
      ) : null}
    </div>
  );
};

export const ScheduleLoading: FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {[...Array(6)].map((_, i) => (
        <PeriodLoading key={i} />
      ))}
    </div>
  );
};

export default Schedule;
