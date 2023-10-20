import { FC, Suspense } from 'react';

import Grades from './components/grades';
import ScheduleWidget from './components/schedule';
import StudentGreet, { StudentGreetLoading } from './components/student-greet';

const DashboardPage: FC = async () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="w-fit items-center border-b pb-1 text-2xl font-semibold tracking-tight lg:text-3xl">
        Добро пожаловать,{' '}
        <Suspense fallback={<StudentGreetLoading />}>
          <StudentGreet />
        </Suspense>
      </h1>
      <div className="grid gap-x-16 gap-y-8 lg:grid-cols-8">
        <div className="lg:col-span-5">
          <ScheduleWidget />
        </div>
        <div className="lg:col-span-3">
          <Grades />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
