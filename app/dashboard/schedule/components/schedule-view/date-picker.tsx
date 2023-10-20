'use client';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            format(value, 'PPP', { locale: ru })
          ) : (
            <span>Выберите дату...</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ru}
          mode="single"
          selected={value}
          onSelect={(value) => value && setValue(value)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default ScheduleDatePicker;
