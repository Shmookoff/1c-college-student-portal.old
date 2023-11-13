import { Download, FileIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

const File: FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={cn(
            'flex cursor-pointer items-center gap-2 py-2 transition-all hover:bg-muted',
            className
          )}
        >
          <FileIcon size={20} />
          <div>{title}</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center justify-center gap-4">
          <FileIcon size={64} className="my-4" />
          <div className="text-xl font-medium">{title}</div>
        </div>
        <DialogFooter>
          <Button className="flex items-center gap-2">
            <Download size={20} /> Скачать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default File;
