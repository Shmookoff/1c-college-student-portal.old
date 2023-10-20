import Link from 'next/link';
import { FC, Suspense } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import GradesList, {
  GradesListLoading,
  getDefaultPeriod,
} from '../../grades/components/grades/list';

const Grades: FC = () => {
  const period = getDefaultPeriod();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="underline underline-offset-4">
          <Link href="/dashboard/grades">Оценки</Link>
        </CardTitle>
        <CardDescription>За неделю</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<GradesListLoading />}>
          <GradesList {...period} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default Grades;
