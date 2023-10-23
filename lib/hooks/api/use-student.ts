import { format } from 'date-fns';
import useSWR from 'swr';

import { StudentsMeGradesResponseBody } from '@/server/1c/student-portal/students/me/grades/schema';

export const useStudentMeGrades = (start: Date, end: Date) =>
  useSWR<StudentsMeGradesResponseBody>(
    `/api/students/me/grades?${new URLSearchParams({
      start: format(start, 'yyyyMMdd'),
      end: format(end, 'yyyyMMdd'),
    })}`
  );
