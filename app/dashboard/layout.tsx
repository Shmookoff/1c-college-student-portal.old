import { FC, ReactNode } from 'react';

import Navbar from './components/navbar';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="border-b">
        <div className="container px-4">
          <Navbar />
        </div>
      </div>
      <main className="container flex min-h-0 flex-[1] flex-col px-4 py-12 lg:py-16">
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
