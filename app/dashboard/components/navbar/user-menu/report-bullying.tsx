'use client';

import { Flag } from 'lucide-react';
import { FC, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const useReportBullying = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const reportBullying = (
    <DropdownMenuItem onClick={() => setDialogOpen(true)}>
      <Flag className="mr-2 h-4 w-4" />
      <span>Сообщить о буллинге</span>
    </DropdownMenuItem>
  );

  const [alertOpen, setAlertOpen] = useState(false);

  const reportBullyingDialog = (
    <>
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ваше обращение отправлено</AlertDialogTitle>
            <AlertDialogDescription>
              Мы свяжемся с вами в ближайшее время
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Закрыть</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Flag className="inline" size={20} /> Сообщить о буллинге
            </DialogTitle>
            <DialogDescription>
              Ваша безопасность является приоритетом для нас. Сообщите о
              буллинге, мы вместе решим проблему.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <Label htmlFor="comment">Расскажите о проблеме</Label>
              <Textarea id="comment" />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                setDialogOpen(false);
                setAlertOpen(true);
              }}
            >
              Сообщить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );

  return { reportBullying, reportBullyingDialog };
};

export default useReportBullying;
