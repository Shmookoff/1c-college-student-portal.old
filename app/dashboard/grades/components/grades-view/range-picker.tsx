'use client';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { FC } from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const RangePicker: FC<{
  value: DateRange | undefined;
  setValue: (v: DateRange | undefined) => any;
}> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="period-picker">Период</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="period-picker"
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, 'LLL dd, y')} -{' '}
                  {format(value.to, 'LLL dd, y')}
                </>
              ) : (
                format(value.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            locale={ru}
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={setValue}
            numberOfMonths={2}
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default RangePicker;
