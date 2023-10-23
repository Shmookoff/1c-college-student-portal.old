import Link from 'next/link';
import { FC } from 'react';

import StartButton from './components/start-button';

const HomePage: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Студенческий портал
        </h1>
        <div className="text-lg font-semibold">
          Нижневартовского социально-гуманитарного колледжа
        </div>
      </div>
      <Link href="/dashboard">
        <StartButton />
      </Link>
    </div>
  );
};

export default HomePage;
