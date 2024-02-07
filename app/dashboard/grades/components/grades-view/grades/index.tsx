'use client';

import React, { FC } from 'react';

import { useStudentMeGrades } from '@/lib/hooks/api/use-student';
import { cn } from '@/lib/utils';

import {
  GradeSchema,
  StudentsMeGradesResponseBody,
} from '@/server/1c/student-portal/students/me/grades/schema';

import DateGrades, { DateGradeLoading } from './date-grades';

const Grades: FC<
  { options: { from: Date; to: Date } } & React.HTMLAttributes<HTMLDivElement>
> = ({ options, className }) => {
  const { data: grades, isLoading } = useStudentMeGrades(
    options.from,
    options.to
  );

  const gradesByDate = (grades: StudentsMeGradesResponseBody) =>
    grades.reduce((acc, v) => {
      const gradesForDate = acc.get(v.date);
      if (gradesForDate) gradesForDate.push(v);
      acc.set(v.date, [v]);
      return acc;
    }, new Map<string, GradeSchema[]>());

  return (
    <div className={cn('flex flex-col gap-4 pr-5', className)}>
      {grades ? (
        grades.length ? (
          [...gradesByDate(grades)]
            .toSorted(
              ([aDate], [bDate]) =>
                new Date(aDate).valueOf() - new Date(bDate).valueOf()
            )
            .map(([date, grades]) => (
              <DateGrades key={date} date={new Date(date)} grades={grades} />
            ))
        ) : (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Данные отсутствуют...
          </div>
        )
      ) : isLoading ? (
        <GradesListLoading />
      ) : null}
    </div>
  );
};

export const GradesListLoading: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {[...Array(4)].map((_, i) => (
        <DateGradeLoading key={i} />
      ))}
    </div>
  );
};

export default Grades;
