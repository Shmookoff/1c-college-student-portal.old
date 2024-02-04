import { FC } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import { studentPortalApi } from '@/server/1c';

import UserMenuOnClient from './client';

const UserMenu: FC = async () => {
  const student = await studentPortalApi.students.me.read();
  const group = await studentPortalApi.groups.read(student.group_id);

  return <UserMenuOnClient student={student} group={group} />;
};

export const UserMenuLoading: FC = () => (
  <Skeleton className="h-8 w-8 rounded-full" />
);

export default UserMenu;
