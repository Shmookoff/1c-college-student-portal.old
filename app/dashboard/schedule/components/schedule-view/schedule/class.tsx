'use client';

import { Cloud } from 'lucide-react';
import { FC, useEffect } from 'react';

import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import type { ClassSchema } from '@/server/1c/student-portal/schedule/by-group-for-date/schema';

const TeacherName: FC<{ name: string }> = ({ name }) => {
  const parts = name.split(' ');
  const abbreviated = `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>{abbreviated}</span>
      </TooltipTrigger>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip>
  );
};

const Class: FC<{ data: ClassSchema }> = ({ data }) => {
  return (
    <div className="grow">
      <div className="flex items-center gap-2 whitespace-pre text-lg font-medium">
        <Tooltip>
          <TooltipTrigger asChild>
            <span>{data.discipline_name}</span>
          </TooltipTrigger>
          <TooltipContent>{data.full_discipline_name}</TooltipContent>
        </Tooltip>
        {data.is_distanced && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Cloud className="mt-1 h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>Дистанционно</TooltipContent>
          </Tooltip>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
        <TeacherName name={data.teacher_name} />
        <Separator orientation="vertical" className="h-4" />
        <span>{data.classroom_name}</span>
        {data.subgroup ? (
          <>
            <Separator orientation="vertical" className="h-4" />
            <span>{`Подгруппа ${data.subgroup}`}</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export const ClassLoading: FC = () => {
  return (
    <div className="flex grow flex-col gap-2">
      <div className="flex items-center gap-2 text-lg font-medium">
        <span className="animate-pulse whitespace-pre rounded-md bg-muted-foreground">
          {' '.repeat(32)}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 text-sm">
        <span className="animate-pulse whitespace-pre rounded-md bg-muted">
          {' '.repeat(32)}
        </span>
        <Separator orientation="vertical" className="h-4 animate-pulse" />
        <span className="animate-pulse whitespace-pre rounded-md bg-muted">
          {' '.repeat(24)}
        </span>
        <Separator orientation="vertical" className="h-4 animate-pulse" />
        <span className="animate-pulse whitespace-pre rounded-md bg-muted">
          {' '.repeat(24)}
        </span>
      </div>
    </div>
  );
};

export default Class;
