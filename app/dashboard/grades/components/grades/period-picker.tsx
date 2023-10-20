'use client';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const PeriodPicker: FC<
  {
    initialPeriod: { start: string; end: string };
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ initialPeriod, className }) => {
  const router = useRouter();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(initialPeriod.start),
    to: new Date(initialPeriod.end),
  });

  const onRangeSet = (range?: DateRange) => {
    setDate(range);
    if (range?.from && range.to) {
      router.push(
        `/dashboard/grades?${new URLSearchParams({
          start: format(range.from, 'yyyy-MM-dd'),
          end: format(range.to, 'yyyy-MM-dd'),
        })}`
      );
      router.refresh();
    }
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y', { locale: ru })} -{' '}
                  {format(date.to, 'LLL dd, y', { locale: ru })}
                </>
              ) : (
                format(date.from, 'LLL dd, y', { locale: ru })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onRangeSet}
            numberOfMonths={2}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PeriodPicker;
