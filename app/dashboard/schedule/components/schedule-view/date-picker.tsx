'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const ScheduleDatePicker: FC<{
  value: Date;
  setValue: (v: Date) => any;
}> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="date-picker">Дата</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant={'outline'}
            className={cn(
              'justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, 'PPP') : <span>Выберите дату...</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(value) => value && setValue(value)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ScheduleDatePicker;
