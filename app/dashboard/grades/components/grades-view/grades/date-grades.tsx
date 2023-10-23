import { format } from 'date-fns';
import { FC } from 'react';

import { GradeSchema } from '@/server/1c/student-portal/students/me/grades/schema';

import Grade, { GradeLoading } from './grade';

const DateGrades: FC<{ date: Date; grades: GradeSchema[] }> = ({
  date,
  grades,
}) => {
  return (
    <div className="relative">
      <h4 className="sticky top-0 bg-background py-1 text-sm text-muted-foreground">
        {format(date, 'd MMM yyyy')}
      </h4>
      <div className="flex flex-wrap gap-0.5">
        {grades.map((grade) => (
          <Grade grade={grade} />
        ))}
      </div>
    </div>
  );
};

export const DateGradeLoading: FC = () => (
  <div className="relative">
    <div className="sticky top-0 bg-background py-1">
      <span className="w-fit animate-pulse whitespace-pre rounded-md bg-muted text-sm">
        {' '.repeat(24)}
      </span>
    </div>
    <div className="flex flex-wrap gap-1">
      {[...Array(3)].map((_, i) => (
        <GradeLoading key={i} />
      ))}
    </div>
  </div>
);

export default DateGrades;
