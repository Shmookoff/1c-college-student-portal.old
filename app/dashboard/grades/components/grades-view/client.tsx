'use client';

import { format } from 'date-fns';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Grades from './grades';
import RangePicker from './range-picker';

const GradesViewOnClient: FC<{
  defaultOptions: { range: { from: Date; to: Date } };
}> = ({ defaultOptions }) => {
  const [period, setPeriod] = useState<DateRange | undefined>(
    defaultOptions.range
  );

  const [alwaysPeriod, setAlwaysPeriod] = useState(defaultOptions.range);

  useEffect(() => {
    const from = period?.from;
    const to = period?.to;
    if (from && to) {
      setAlwaysPeriod({ from, to });
    }
  }, [period]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams({
      from: format(alwaysPeriod.from, 'yyyyMMdd'),
      to: format(alwaysPeriod.to, 'yyyyMMdd'),
    });
    router.push(`${pathname}?${params}` as Route);
  }, [alwaysPeriod, pathname, router]);

  return (
    <div className="grid min-h-0 flex-[1] auto-rows-min gap-x-16 gap-y-8 lg:auto-rows-auto lg:grid-cols-12">
      <Card className="lg:col-span-4 lg:h-full">
        <CardHeader>
          <CardTitle>Поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <RangePicker value={period} setValue={setPeriod} />
        </CardContent>
      </Card>
      <div className="min-h-0 lg:col-span-8">
        <Grades
          className="mx-auto h-full max-w-lg overflow-auto"
          options={alwaysPeriod}
        />
      </div>
    </div>
  );
};

export default GradesViewOnClient;
