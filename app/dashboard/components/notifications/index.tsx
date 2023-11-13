import { Bell } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import Notification from './notification';

const Notifications: FC<{ className?: string }> = ({ className }) => {
  const notifications = [
    {
      id: 1,
      type: 'announcement' as const,
      title: 'Олимпиада Volga IT',
      content:
        'Consectetur aute magna non adipisicing enim ex minim do do aute sunt aliquip.',
      date: new Date(),
    },
    {
      id: 2,
      type: 'schedule' as const,
      title: 'Изменение в расписании',
      content: 'Minim amet dolor laborum commodo et et elit.',
      date: new Date(),
    },
    {
      id: 3,
      type: 'grade' as const,
      title: 'Новая оценка',
      content:
        'Reprehenderit quis duis aute aliquip labore exercitation irure consequat magna do eiusmod sunt anim.',
      date: new Date(),
    },
    {
      id: 4,
      type: 'cloud' as const,
      title: 'Новый файл в облаке',
      content:
        'Cillum ex nostrud exercitation qui anim elit ullamco id et sunt veniam quis dolor.',
      date: new Date(),
    },
  ];
  return (
    <Card className={cn('flex flex-col', className)}>
      <CardHeader>
        <CardTitle>
          <Bell className="inline-block" size={24} /> Уведомления
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-0 flex-[1] px-0">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-4">
            {notifications.map((notification) => (
              <Notification
                className="px-6"
                key={notification.id}
                {...notification}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Notifications;
