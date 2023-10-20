import { isValid, parse } from 'date-fns';
import { redirect } from 'next/navigation';
import { FC, Suspense } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import GradesList, { GradesListLoading, getDefaultPeriod } from './list';
import PeriodPicker from './period-picker';

const getPeriod = (period?: { start?: string; end?: string }) => {
  if (period?.start && period.end) {
    const format = 'yyyy-MM-dd';
    const base = new Date();
    const start = parse(period.start, format, base);
    const end = parse(period.end, format, base);

    if (isValid(start) && isValid(end)) return { start, end };
    redirect('/dashboard/grades');
  }
  return getDefaultPeriod();
};

const Grades: FC<{ start?: string; end?: string }> = ({ start, end }) => {
  const period = getPeriod({ start, end });
  return (
    <div className="grid grow auto-rows-min gap-x-16 gap-y-8 lg:auto-rows-auto lg:grid-cols-12">
      <Card className="lg:col-span-4 lg:h-full">
        <CardHeader>
          <CardTitle>Поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <PeriodPicker
            initialPeriod={{
              start: period.start.toString(),
              end: period.end.toString(),
            }}
          />
        </CardContent>
      </Card>
      <div className="lg:col-span-8">
        <Suspense fallback={<GradesListLoading />}>
          <GradesList {...period} />
        </Suspense>
      </div>
    </div>
  );
};

export default Grades;
