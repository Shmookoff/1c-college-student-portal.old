'use client';

import { FC } from 'react';

import { cn } from '@/lib/utils';

import { ClassSchema } from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

import Class, { ClassLoading } from './class';

const bellSchedule = [
  {
    from: '8.00',
    to: '8.45',
  },
  {
    from: '8.55',
    to: '9.40',
  },
  {
    from: '9.50',
    to: '10.35',
  },
  {
    from: '10.45',
    to: '11.30',
  },
  {
    from: '12.00',
    to: '12.45',
  },
  {
    from: '12.55',
    to: '13.40',
  },
  {
    from: '13.50',
    to: '14.35',
  },
  {
    from: '15.00',
    to: '15.45',
  },
  {
    from: '15.55',
    to: '16.40',
  },
  {
    from: '16.50',
    to: '17.35',
  },
  {
    from: '17.45',
    to: '18.30',
  },
  {
    from: '18.35',
    to: '19.20',
  },
  {
    from: '19.25',
    to: '20.10',
  },
  {
    from: '20.15',
    to: '21.00',
  },
];

const Period: FC<{
  classNumber: number;
  classes: Map<number, ClassSchema>;
  className?: string;
}> = ({ classNumber, classes, className }) => {
  const bell = bellSchedule[classNumber - 1];
  return (
    <div className={cn('relative flex flex-col gap-2', className)}>
      <div className="sticky top-0 bg-background text-muted-foreground">
        <span>{classNumber} урок</span>{' '}
        <span className="text-sm">
          {bell.from} - {bell.to}
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {[...classes]
          .toSorted(([a], [b]) => a - b)
          .map(([subgroup, scheduledClass]) => (
            <Class
              key={(scheduledClass.class_number, subgroup)}
              data={scheduledClass}
            />
          ))}
      </div>
    </div>
  );
};

export const PeriodLoading: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="animate-pulse whitespace-pre rounded-md bg-muted">
          {' '.repeat(16)}
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {[...Array(2)].map((_, i) => (
          <ClassLoading key={i} />
        ))}
      </div>
    </div>
  );
};

export default Period;
