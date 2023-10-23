import { FC, Suspense } from 'react';

import GradesWidget from './components/grades';
import ScheduleWidget from './components/schedule';
import StudentGreet, { StudentGreetLoading } from './components/student-greet';

const DashboardPage: FC = async () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <h1 className="w-fit items-center border-b pb-1 text-2xl font-semibold tracking-tight lg:text-3xl">
        Добро пожаловать,{' '}
        <Suspense fallback={<StudentGreetLoading />}>
          <StudentGreet />
        </Suspense>
      </h1>
      <div className="grid min-h-0 flex-[1] gap-x-16 gap-y-8 lg:max-h-[32rem] lg:grid-cols-8">
        <div className="min-h-0 lg:col-span-5">
          <ScheduleWidget />
        </div>
        <div className="min-h-0 lg:col-span-3">
          <GradesWidget />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
