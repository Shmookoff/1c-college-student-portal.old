'use client';

import { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';

import fetcher from '@/lib/hooks/api/fetcher';

const SWRConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRConfigProvider;
