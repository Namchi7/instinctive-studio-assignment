export type SelectScrollableOptionType = {
  value: string;
  title: string;
};

export interface StudentsDataType {
  id: string;
  created_at: Date;
  student_name: string;
  cohort: string;
  courses: string;
  date_joined: Date;
  last_login: Date;
  status: string;
  batch: string;
}

export interface CreateStudentBodyType {
  id?: string;
  name: string;
  cohort: string;
  batch: string;
  courses: string;
  status: string;
}

export interface CreateStudentResponseType {
  success: boolean;
  message: string;
}
