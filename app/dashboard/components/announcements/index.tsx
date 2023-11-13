import { Megaphone } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import Announcement from './announcement';

const Announcements: FC<{ className?: string }> = ({ className }) => {
  const announcements = [
    {
      id: 1,
      title: 'Результаты государственной итоговой аттестации',
      content:
        'Id officia cupidatat sit ut adipisicing velit eu minim nostrud ipsum.',
      created: new Date(),
    },
    {
      id: 2,
      title: 'Фестиваль спикеров',
      content:
        'Tempor irure quis irure nostrud ut aliquip anim non et irure incididunt occaecat veniam duis.',
      created: new Date(),
    },
    {
      id: 3,
      title: '40 лет НСГК',
      content: 'Incididunt nisi sit magna minim.',
      created: new Date(),
    },
    {
      id: 4,
      title: 'Студенческий портал запущен',
      content:
        'Duis eiusmod officia exercitation proident duis amet deserunt proident duis occaecat amet ex officia mollit.',
      created: new Date(),
    },
    {
      id: 5,
      title: '40 лет НСГК',
      content: 'Incididunt nisi sit magna minim.',
      created: new Date(),
    },
    {
      id: 6,
      title: 'Студенческий портал запущен',
      content:
        'Duis eiusmod officia exercitation proident duis amet deserunt proident duis occaecat amet ex officia mollit.',
      created: new Date(),
    },
    {
      id: 7,
      title: '40 лет НСГК',
      content: 'Incididunt nisi sit magna minim.',
      created: new Date(),
    },
    {
      id: 8,
      title: 'Студенческий портал запущен',
      content:
        'Duis eiusmod officia exercitation proident duis amet deserunt proident duis occaecat amet ex officia mollit.',
      created: new Date(),
    },
  ];
  return (
    <Card className={cn('flex flex-col', className)}>
      <CardHeader>
        <CardTitle>
          <Megaphone className="inline-block" size={24} /> Объявления
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-0 flex-[1]">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-4">
            {announcements.map((announcement) => (
              <Announcement key={announcement.id} {...announcement} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Announcements;
