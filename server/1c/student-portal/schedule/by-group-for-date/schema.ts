export type ClassSchema = {
  class_number: number;
  subgroup: number;
  is_distanced: boolean;
  discipline_name: string;
  full_discipline_name: string;
  teacher_name: string;
  classroom_name: string;
};

export type ScheduleByGroupForDateResponseBody = ClassSchema[];
