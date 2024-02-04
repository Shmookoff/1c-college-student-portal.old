'use client';

import { FC } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { GroupsReadResponseBody } from '@/server/1c/student-portal/groups/read/schema';
import { StudentsMeReadResponseBody } from '@/server/1c/student-portal/students/me/read/schema';

import Logout from './logout';
import useReportBullying from './report-bullying';

const UserMenuOnClient: FC<{
  student: StudentsMeReadResponseBody;
  group: GroupsReadResponseBody;
}> = ({ student, group }) => {
  // const { reportBullying, reportBullyingDialog } = useReportBullying();

  return (
    <>
      {/* {reportBullyingDialog} */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                {student.name
                  .split(' ', 2)
                  .map((word) => word.charAt(0))
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{student.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {group.name}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* {reportBullying} */}
          <DropdownMenuSeparator />
          <Logout />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenuOnClient;
