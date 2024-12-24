import {
  CreateStudentBodyType,
  CreateStudentResponseType,
  StudentsDataType,
} from "@/constants/types";
import { FiltersType } from "@/redux/reducers/GetStudentsSlice";

export const fetchStudentData = async (id: string) => {
  const res = await fetch(`api/student?id=${id}`);

  return (await res.json()) as StudentsDataType;
};

export const fetchStudentsRecords = async (filters: FiltersType) => {
  const res = await fetch(
    `/api/students?cohort=${filters.cohort}&batch=${filters.batch}`
  );

  return (await res.json()) as StudentsDataType[];
};

export const createStudentRecord = async (bodyData: CreateStudentBodyType) => {
  const res = await fetch("/api/students", {
    method: "POST",
    body: JSON.stringify(bodyData),
  });

  return (await res.json()) as CreateStudentResponseType;
};

export const updateStudentRecord = async (bodyData: CreateStudentBodyType) => {
  const res = await fetch("/api/students", {
    method: "PATCH",
    body: JSON.stringify(bodyData),
  });

  return (await res.json()) as CreateStudentResponseType;
};

export const deleteStudentRecord = async (id: string) => {
  const res = await fetch("/api/students", {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });

  return (await res.json()) as CreateStudentResponseType;
};
