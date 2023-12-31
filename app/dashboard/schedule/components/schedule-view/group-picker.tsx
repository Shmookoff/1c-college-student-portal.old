'use client';

import { CommandSeparator } from 'cmdk';
import { ChevronsUpDown } from 'lucide-react';
import { FC, useState } from 'react';
import { Fragment } from 'react';

import { useGroupsList } from '@/lib/hooks/api/use-groups';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { GroupsListResponseBody } from '@/server/1c/student-portal/groups/list/schema';

const GroupPicker: FC<{
  value: string;
  setValue: (v: string) => any;
}> = ({ value, setValue }) => {
  const { data: groups } = useGroupsList();

  const [open, setOpen] = useState(false);

  const groupsByYear = groups?.reduce((acc, v) => {
    const year = acc.get(v.year);
    if (year) year.push(v);
    else acc.set(v.year, [v]);
    return acc;
  }, new Map<number, GroupsListResponseBody>());

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="group-picker">Группа</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="group-picker"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {groups
              ? value
                ? groups?.find((group) => group.id === value)?.name
                : 'Выберите группу...'
              : 'Загрузка...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command
            className="w-full"
            filter={(value, search) =>
              groups?.find(
                (group) =>
                  group.id === value &&
                  group.name.toLowerCase().includes(search)
              )
                ? 1
                : 0
            }
          >
            <CommandInput placeholder="Найти группу..." />
            <CommandEmpty>Группа не найдена</CommandEmpty>
            <div className="max-h-56 overflow-y-auto">
              {groupsByYear &&
                [...groupsByYear]
                  .toSorted(([aYear], [bYear]) => aYear - bYear)
                  .map(([year, groups]) => (
                    <Fragment key={year}>
                      <CommandGroup heading={`${year} курс`}>
                        {groups
                          .toSorted((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                          })
                          .map((group) => (
                            <CommandItem
                              key={group.id}
                              onSelect={(currentValue) => {
                                setValue(currentValue);
                                setOpen(false);
                              }}
                              value={group.id}
                            >
                              {group.name}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                      <CommandSeparator />
                    </Fragment>
                  ))}
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default GroupPicker;
