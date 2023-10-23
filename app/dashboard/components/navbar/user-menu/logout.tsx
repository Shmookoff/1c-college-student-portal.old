'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const Logout: FC = () => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        await fetch('/api/auth/logout', {
          method: 'POST',
        });
        router.push('/');
        router.refresh();
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Выйти</span>
    </DropdownMenuItem>
  );
};

export default Logout;
