import { FC, ReactNode } from 'react';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import DateFnsOptionsClientProvider from './date-fns/client';
import DateFnsOptionsServerProvider from './date-fns/server';
import SWRConfigProvider from './swr';

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <DateFnsOptionsServerProvider>
    <DateFnsOptionsClientProvider>
      <SWRConfigProvider>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </SWRConfigProvider>
    </DateFnsOptionsClientProvider>
  </DateFnsOptionsServerProvider>
);

export default Providers;
