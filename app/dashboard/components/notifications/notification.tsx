import { format } from 'date-fns';
import { Book, CalendarDays, Cloud, Megaphone } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const notificationTypeToIcon = {
  announcement: Megaphone,
  schedule: CalendarDays,
  grade: Book,
  cloud: Cloud,
};

const Notification: FC<{
  type: keyof typeof notificationTypeToIcon;
  title: string;
  content: string;
  date: Date;
  className?: string;
}> = ({ type, title, date, content, className }) => {
  const Icon = notificationTypeToIcon[type];
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className={cn(
            'group flex cursor-pointer gap-4 transition-all hover:bg-muted',
            className
          )}
        >
          <div className="pt-2">
            <Icon />
          </div>
          <div>
            <div>{title}</div>
            <div className="text-sm text-muted-foreground">{content}</div>
            <div className="text-sm text-muted-foreground">
              {format(date, 'dd.MM.yyyy HH:mm')}
            </div>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Закрыть</AlertDialogCancel>
          <AlertDialogAction>Перейти</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Notification;
