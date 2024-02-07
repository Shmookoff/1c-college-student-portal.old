'use client';

import { format } from 'date-fns';
import { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import ScheduleDatePicker from './date-picker';
import GroupPicker from './group-picker';
import Schedule from './schedule';

const ScheduleViewOnClient: FC<{
  defaultOptions: { groupId: string; date: Date };
}> = ({ defaultOptions }) => {
  const [groupId, setGroupId] = useState(defaultOptions.groupId);
  const [date, setDate] = useState(defaultOptions.date);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams({
      groupId,
      date: format(date, 'yyyyMMdd'),
    });
    router.push(`${pathname}?${params}` as Route);
  }, [groupId, date, pathname, router]);

  return (
    <div className="grid min-h-0 flex-[1] auto-rows-min gap-x-16 gap-y-8 lg:auto-rows-auto lg:grid-cols-12">
      <Card className="lg:col-span-4 lg:h-full">
        <CardHeader>
          <CardTitle>Поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <GroupPicker value={groupId} setValue={setGroupId} />
            <ScheduleDatePicker value={date} setValue={setDate} />
          </div>
        </CardContent>
      </Card>
      <div className="min-h-0 min-w-0 lg:col-span-8">
        <Schedule
          className="h-full overflow-auto pr-5"
          groupId={groupId}
          date={date}
        />
      </div>
    </div>
  );
};

export default ScheduleViewOnClient;
