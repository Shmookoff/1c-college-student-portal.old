import { FC } from 'react';

import Grades from './components/grades';

const GradesPage: FC<{ searchParams?: { start?: string; end?: string } }> = ({
  searchParams,
}) => {
  return (
    <div className="flex grow flex-col gap-8">
      <h1 className="flex h-fit w-fit items-center whitespace-pre border-b pb-1 text-2xl font-semibold tracking-tight lg:text-3xl">
        Оценки
      </h1>
      <Grades {...searchParams} />
    </div>
  );
};

export default GradesPage;
