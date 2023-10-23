import { format } from 'date-fns';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { getDefaultOptions } from '../../schedule/components/schedule-view';
import Schedule from '../../schedule/components/schedule-view/schedule';

const ScheduleWidget: FC = async () => {
  const classesOptions = await getDefaultOptions();
  return (
    <Card className="flex max-h-full flex-col">
      <CardHeader>
        <CardTitle>
          <Link
            href="/dashboard/schedule"
            className="transition hover:text-primary"
          >
            Расписание <MoveUpRight className="inline-block h-5 w-5" />
          </Link>
        </CardTitle>
        <CardDescription>
          На сегодня, {format(classesOptions.date, 'dd MMM yyyy')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-[1] flex-col">
        <Schedule
          className="min-h-0 flex-[1] overflow-auto"
          {...classesOptions}
        />
      </CardContent>
    </Card>
  );
};

export default ScheduleWidget;
