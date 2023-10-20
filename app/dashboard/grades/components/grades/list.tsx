import { format, subDays } from 'date-fns';
import { FC } from 'react';

import { Separator } from '@/components/ui/separator';

import { studentPortalApi } from '@/server/1c';
import { GradeSchema } from '@/server/1c/student-portal/students/me/grades/schema';

import Grade, { GradeLoading } from './grade';

export const getDefaultPeriod = () => {
  const end = new Date('2009-12-26');
  const start = subDays(end, 7);
  return { start, end };
};

const GradesList: FC<{ start: Date; end: Date }> = async ({ start, end }) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const grades = await studentPortalApi.students.me.grades(start, end);

  const gradesByDate = grades.reduce((acc, v) => {
    const gradesForDate = acc.get(v.date);
    if (gradesForDate) gradesForDate.push(v);
    acc.set(v.date, [v]);
    return acc;
  }, new Map<string, GradeSchema[]>());

  return (
    <div className="flex flex-col gap-4">
      {[...gradesByDate].map(([date, grades]) => (
        <div key={date} className="flex flex-col gap-1">
          <h4 className="text-sm text-muted-foreground">
            {format(new Date(date), 'd MMMM yyyy')}
          </h4>
          <div className="flex flex-wrap gap-0.5">
            {grades.map((grade) => (
              <Grade grade={grade} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const GradesListLoading: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="flex flex-col gap-1">
          <span className="animate-pulse whitespace-pre bg-muted text-sm">
            {' '.repeat(10)}
          </span>
          <div className="flex flex-wrap gap-0.5">
            {[...Array(3).map((_, i) => <GradeLoading key={i} />)]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradesList;
