'use client';

import { format } from 'date-fns';
import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

import ScheduleDatePicker from './date-picker';
import GroupPicker from './group-picker';
import Schedule from './schedule';

const ScheduleOnClient: FC<{
  defaultOptions: { groupId: string; date: Date };
}> = ({ defaultOptions }) => {
  const [groupId, setGroupId] = useState(defaultOptions.groupId);
  const [date, setDate] = useState(defaultOptions.date);

  const router = useRouter();
  const pathname = usePathname();

  const updateSearchParams = useCallback(() => {
    const params = new URLSearchParams({
      groupId,
      date: format(date, 'yyyyMMdd'),
    });
    router.push(`${pathname}?${params}` as Route);
  }, [router, pathname, groupId, date]);

  return (
    <div className="grid grow auto-rows-min gap-x-16 gap-y-8 lg:auto-rows-auto lg:grid-cols-12">
      <Card className="lg:col-span-4 lg:h-full">
        <CardHeader>
          <CardTitle>Поиск</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="group">Группа</Label>
              <GroupPicker
                id="group"
                value={groupId}
                setValue={(v) => {
                  setGroupId(v);
                  updateSearchParams();
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="year">Дата</Label>
              <ScheduleDatePicker
                value={date}
                setValue={(v) => {
                  setDate(v);
                  updateSearchParams();
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="lg:col-span-8">
        <Schedule groupId={groupId} date={date} />
      </div>
    </div>
  );
};

export default ScheduleOnClient;
