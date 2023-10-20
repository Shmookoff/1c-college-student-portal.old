import { FC } from 'react';

import { Separator } from '@/components/ui/separator';

import { GradeSchema } from '@/server/1c/student-portal/students/me/grades/schema';

const gradeRepr = (grade: GradeSchema) => {
  if (grade.is_marked) return grade.mark;
  if (grade.attendance) return grade.passed ? 'Зачет' : 'Незачет';
  return 'Неявка';
};

const Grade: FC<{ grade: GradeSchema }> = ({ grade }) => (
  <div className="flex gap-2.5 rounded-md border bg-card p-2.5">
    <div className="font-semibold">{grade.discipline_name}</div>
    <Separator orientation="vertical" />
    <div>{gradeRepr(grade)}</div>
  </div>
);

export const GradeLoading: FC = () => (
  <div className="flex gap-2.5 rounded-md border bg-card p-2.5">
    <span className="animate-pulse whitespace-pre bg-muted-foreground font-semibold">
      {'b'.repeat(16)}
    </span>
    <Separator orientation="vertical" className="animate-pulse" />
    <span className="animate-pulse whitespace-pre bg-muted"> </span>
  </div>
);

export default Grade;
