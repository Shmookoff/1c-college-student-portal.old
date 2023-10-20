import Link from 'next/link';
import { FC, Suspense } from 'react';

import UserMenu, { UserMenuLoading } from './user-menu';

const Navbar: FC = () => {
  return (
    <div className="flex h-16 items-center justify-between">
      <div>
        <Link href="/dashboard">Студенческий портал</Link>
      </div>
      <Suspense fallback={<UserMenuLoading />}>
        <UserMenu />
      </Suspense>
    </div>
  );
};

export default Navbar;
