import { FC } from 'react';

import ScheduleView from './components/schedule-view';

const SchedulePage: FC<{
  searchParams?: { groupId?: string; date?: string };
}> = ({ searchParams }) => {
  return (
    <div className="flex h-full flex-col gap-8">
      <h1 className="flex h-fit w-fit items-center whitespace-pre border-b pb-1 text-2xl font-semibold tracking-tight lg:text-3xl">
        Расписание
      </h1>
      <ScheduleView {...searchParams} />
    </div>
  );
};

export default SchedulePage;
