'use client';

import { FC } from 'react';

import { ClassSchema } from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

import Class, { ClassLoading } from './class';

const Period: FC<{
  classNumber: number;
  classes: Map<number, ClassSchema>;
}> = ({ classNumber, classes }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground">{classNumber} урок</div>
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
