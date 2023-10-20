export type GradeSchema = {
  date: string;
  is_marked: boolean;
  passed: boolean;
  mark: number;
  attendance: boolean;
  discipline_name: string;
  full_discipline_name: string;
  control_type: string;
};

export type StudentsMeGradesResponseBody = GradeSchema[];
