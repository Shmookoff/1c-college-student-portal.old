import { FC } from 'react';

import CloudView from './components/cloud-view';

const CloudPage: FC = () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <h1 className="flex h-fit w-fit items-center whitespace-pre border-b pb-1 text-2xl font-semibold tracking-tight lg:text-3xl">
        Облако
      </h1>
      <CloudView />
    </div>
  );
};

export default CloudPage;
