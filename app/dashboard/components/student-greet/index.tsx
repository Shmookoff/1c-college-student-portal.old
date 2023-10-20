import { FC } from 'react';

import { studentPortalApi } from '@/server/1c';

const StudentGreet: FC = async () => {
  const student = await studentPortalApi.students.me.read();
  return `${student.name.split(' ')[1]}!`;
};

export const StudentGreetLoading: FC = () => {
  return (
    <span className="animate-pulse whitespace-pre rounded-md bg-muted">
      {' '.repeat(32)}
    </span>
  );
};

export default StudentGreet;
