'use client';

import React, { type FC } from 'react';

import { useScheduleByGroupForDate } from '@/lib/hooks/api/use-schedule';
import { cn } from '@/lib/utils';

import type {
  ClassSchema,
  ScheduleByGroupForDateResponseBody,
} from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

import Period, { PeriodLoading } from './period';

const Schedule: FC<
  { groupId: string; date: Date } & React.HTMLAttributes<HTMLDivElement>
> = ({ groupId, date, className }) => {
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
    <div className={cn('flex flex-col gap-y-4', className)}>
      {schedule ? (
        schedule.length ? (
          [...scheduleToPeriods(schedule)].map(([classNumber, classes]) => (
            <Period
              key={classNumber}
              classNumber={classNumber}
              classes={classes}
            />
          ))
        ) : (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Данные отсутствуют...
          </div>
        )
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
