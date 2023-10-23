import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { getDefaultOptions } from '../../grades/components/grades-view';
import Grades from '../../grades/components/grades-view/grades';

const GradesWidget: FC = async () => {
  const options = await getDefaultOptions();
  return (
    <Card className="flex max-h-full flex-col">
      <CardHeader>
        <CardTitle>
          <Link
            href="/dashboard/grades"
            className="transition hover:text-primary"
          >
            Оценки <MoveUpRight className="inline-block h-5 w-5" />
          </Link>
        </CardTitle>
        <CardDescription>За неделю</CardDescription>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-[1] flex-col">
        <Grades
          options={options.range}
          className="min-h-0 flex-[1] overflow-auto"
        />
      </CardContent>
    </Card>
  );
};

export default GradesWidget;
