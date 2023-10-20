import { format } from 'date-fns';

import fetch1c from '@/server/1c/fetch';

import { protectedProcedure } from '../../../procedures';
import { StudentsMeGradesResponseBody } from './schema';

export const generateStudentsMeGradesUrl = (start: Date, end: Date) =>
  `/students/me/grades?${new URLSearchParams({
    start: format(start, 'yyyyMMdd'),
    end: format(end, 'yyyyMMdd'),
  })}`;

const studentsMeGrades = protectedProcedure(
  (access_token: string, start: Date, end: Date) => {
    return fetch1c<StudentsMeGradesResponseBody>(
      generateStudentsMeGradesUrl(start, end),
      {
        headers: { Authorization: access_token },
      }
    );
  }
);

export default studentsMeGrades;
