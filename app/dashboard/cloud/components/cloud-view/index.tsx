import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import File from './file';

const files = [
  { id: 1, title: 'Лабораторная работа 1' },
  { id: 2, title: 'Лабораторная работа 2' },
  { id: 3, title: 'Лабораторная работа 3' },
  { id: 4, title: 'Лабораторная работа 4' },
];

const CloudView: FC = () => {
  return (
    <Card className="min-h-0 flex-[1]">
      <CardHeader>
        <CardTitle>Разработка приложений на 1С</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-0">
        {files.map((file) => (
          <File key={file.id} {...file} className="px-6" />
        ))}
      </CardContent>
    </Card>
  );
};
export default CloudView;
