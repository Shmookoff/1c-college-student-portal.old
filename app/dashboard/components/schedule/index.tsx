import { format } from 'date-fns';
import Link from 'next/link';
import { FC } from 'react';

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
    <Card>
      <CardHeader>
        <CardTitle className="underline underline-offset-4">
          <Link href="/dashboard/schedule">Расписание</Link>
        </CardTitle>
        <CardDescription>
          На сегодня, {format(classesOptions.date, 'dd MMM yyyy')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Schedule {...classesOptions} />
      </CardContent>
    </Card>
  );
};

export default ScheduleWidget;
