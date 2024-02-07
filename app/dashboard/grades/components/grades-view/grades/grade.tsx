'use client';

import { FC } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { GradeSchema } from '@/server/1c/student-portal/students/me/grades/schema';

const markRepr = (grade: GradeSchema) => {
  if (grade.is_marked)
    return {
      text: grade.mark,
      className:
        grade.mark > 3
          ? 'text-green-400'
          : grade.mark < 3
          ? 'text-red-400'
          : 'text-yellow-400',
    };
  if (grade.attendance)
    return grade.passed
      ? { text: 'Зачет', className: 'text-green-400' }
      : { text: 'Незачет', className: 'text-red-400' };
  return { text: 'Неявка', className: 'text-foreground' };
};

const Grade: FC<{ grade: GradeSchema }> = ({ grade }) => {
  const { text, className } = markRepr(grade);
  return (
    <div className="flex w-full justify-between gap-2">
      <div className="text-wrap min-w-0 break-words font-semibold">
        {grade.full_discipline_name}
      </div>
      <div className={className}>{text}</div>
    </div>
  );
};

export const GradeLoading: FC = () => (
  <div className="flex w-full justify-between gap-2 whitespace-pre rounded-md">
    <span className="animate-pulse rounded-md bg-muted font-semibold">
      {' '.repeat(32)}
    </span>
    <span className="animate-pulse rounded-md bg-muted">{' '.repeat(10)}</span>
  </div>
);

export default Grade;
