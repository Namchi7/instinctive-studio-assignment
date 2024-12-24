import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SubjectBadgeWithBatch from "./SubjectBadgeWithBatch";
import StudentPopoverMenu from "./StudentPopoverMenu";

import { StudentsDataType } from "@/constants/types";

const StudentsTable: React.FC<{
  students: StudentsDataType[];
  setEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditID: React.Dispatch<React.SetStateAction<string>>;
}> = ({ students, setEditFormOpen, setEditID }) => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getFormattedDate = (dt: string, time: boolean) => {
    const date: Date = new Date(dt);

    const day: string =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const mon: number = date.getMonth();
    const year: number = date.getFullYear();

    const month: string = months[mon].substring(0, 3);

    const dateString = `${day}. ${month}. ${year}`;

    const hour: number =
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const hrStr: string = hour > 9 ? `${hour}` : `0${hour}`;
    const min: number = date.getMinutes();

    const timeString: string =
      date.getHours() > 12 ? `${hrStr}:${min} PM` : `${hrStr}:${min} AM`;

    return time ? `${dateString} ${timeString}` : dateString;
  };

  const getCoursesArray = (arrString: string) => {
    const arr: string[] = arrString
      .substring(1, arrString.length - 1)
      .split(", ")
      .map((sub) => sub.substring(1, sub.length - 1));

    return arr;
  };

  return (
    <Table className="h-fit grow">
      <TableCaption className="text-xs">
        No more data for selected filters.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-xs text-black font-bold">
            Student Name
          </TableHead>
          <TableHead className="text-xs text-black font-bold">Cohort</TableHead>
          <TableHead className="text-xs text-black font-bold">
            Courses
          </TableHead>
          <TableHead className="text-xs text-black font-bold">
            Date Joined
          </TableHead>
          <TableHead className="text-xs text-black font-bold">
            Last Login
          </TableHead>
          <TableHead className="w-fit text-xs text-black text-center font-bold px-2">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="text-xs text-black font-normal whitespace-pre-line">
              {student.student_name}
            </TableCell>

            <TableCell className="text-xs text-black font-normal">
              {`AY ${student.cohort}`}
            </TableCell>

            <TableCell>
              <div className="w-full flex flex-row justify-start items-center gap-2 overflow-x-scroll">
                {getCoursesArray(student.courses).map((item, i: number) => (
                  <SubjectBadgeWithBatch
                    subject={item}
                    batch={student.batch}
                    key={i}
                  />
                ))}
              </div>
            </TableCell>

            <TableCell className="text-xs text-black font-normal">
              {getFormattedDate(student.date_joined.toString(), false)}
            </TableCell>

            <TableCell className="text-xs text-black font-normal">
              {student.last_login
                ? getFormattedDate(student.last_login.toString(), true)
                : ""}
            </TableCell>

            <TableCell>
              <div
                className={`size-[0.875rem] rounded-full ${
                  student.status === "online" ? "bg-[#4AEA40]" : "bg-[#EA4E40]"
                } mx-auto`}
              ></div>
            </TableCell>

            <TableCell>
              <StudentPopoverMenu
                id={student.id}
                setEditFormOpen={setEditFormOpen}
                setEditID={setEditID}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentsTable;
