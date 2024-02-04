import { Book, CalendarDays } from 'lucide-react';
import { FC, Suspense } from 'react';

import FeatureCard from './components/feature-card';
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

      <div className="grid min-h-0 flex-[1] gap-x-8 gap-y-8">
        <div className="grid auto-cols-fr auto-rows-[128px] gap-8">
          <FeatureCard
            icon={CalendarDays}
            text="Расписание"
            href="/dashboard/schedule"
          />
          <FeatureCard icon={Book} text="Оценки" href="/dashboard/grades" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
