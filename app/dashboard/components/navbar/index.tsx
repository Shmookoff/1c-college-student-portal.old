import { Home } from 'lucide-react';
import Link from 'next/link';
import { FC, Suspense } from 'react';

import UserMenu, { UserMenuLoading } from './user-menu';

const Navbar: FC = () => {
  return (
    <div className="flex h-16 items-center justify-between">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 rounded-md bg-primary px-2 py-1 text-primary-foreground transition-all hover:bg-primary/90"
      >
        <Home className="inline " size={20} />
        <span className="font-medium">Студенческий портал</span>
      </Link>
      <Suspense fallback={<UserMenuLoading />}>
        <UserMenu />
      </Suspense>
    </div>
  );
};

export default Navbar;
