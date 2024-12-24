"use client ";

import React, { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { toast } from "sonner";
import { SelectScrollableInput } from "./SelectScrollable";
import {
  classOptions,
  cohortOptions,
  statusOptions,
} from "@/constants/studentsPage";
import CheckboxCourses from "./CheckboxCourses";
import {
  CreateStudentBodyType,
  CreateStudentResponseType,
  StudentsDataType,
} from "@/constants/types";

import { fetchStudentData, updateStudentRecord } from "@/lib/studentsAPI";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getStudentsData } from "@/redux/reducers/GetStudentsSlice";
import { RootState } from "@/redux/store";

const EditStudentForm: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}> = ({ setOpen, id }) => {
  const dispatch = useAppDispatch();

  const fCohort: string = useAppSelector(
    (state: RootState) => state.studentsPage.cohort
  );
  const fBatch: string = useAppSelector(
    (state: RootState) => state.studentsPage.batch
  );

  const [data, setData] = useState<StudentsDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [batch, setBatch] = useState<string>(classOptions[0].value);
  const [cohort, setCohort] = useState<string>(cohortOptions[0].value);
  const [courses, setCourses] = useState<string[]>([]);
  const [status, setStatus] = useState<string>(statusOptions[0].value);

  const submitForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!name) {
      toast("Please enter a name.");
      return;
    }

    if (courses.length < 1) {
      toast("Select a minimum of one course.");
      return;
    }

    const x: string = courses.map((item) => `'${item}'`).join(", ");

    const coursesStr: string = `[${x}]`;

    const data: CreateStudentBodyType = {
      id: id,
      name: name,
      batch: batch,
      cohort: cohort,
      courses: coursesStr,
      status: status ? status : "online",
    };

    const res: CreateStudentResponseType = await updateStudentRecord(data);

    if (res.success) {
      setOpen(false);
      toast("Record updates successfully.");
      dispatch(getStudentsData({ cohort: fCohort, batch: fBatch }));
    } else {
      toast(`Error while updating record.\nPlease try again.`);
    }
  };

  const getCoursesArray = (arrString: string) => {
    const arr: string[] = arrString
      .substring(1, arrString.length - 1)
      .split(", ")
      .map((sub) => sub.substring(1, sub.length - 1));

    return arr;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetchStudentData(id);

      setData(res);
      setLoading(false);
    };

    if (id) {
      getData();
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setName(data.student_name);
      setBatch(data.batch);
      setCohort(data.cohort);
      setStatus(data.status);

      const coursesArr = getCoursesArray(data.courses);

      setCourses(coursesArr);
    }
  }, [data]);

  return (
    <div className="fixed inset-0 size-full z-[20]">
      <div className="relative size-full flex justify-center items-center bg-black/80 p-4 z-[21]">
        <form className="absolute w-full max-w-[34rem] flex flex-col justify-start items-center gap-3 bg-white rounded-lg p-4 z-[23]">
          <p className="w-full text-left text-2xl text-black font-bold">
            Edit Student Record
          </p>

          {!loading ? (
            <>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label htmlFor="name" className="">
                  Student Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full text-[#3F526E] bg-[#E9EDF1] rounded-sm outline-none px-3 py-2"
                />
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label htmlFor="batch" className="">
                  Batch
                </label>
                <SelectScrollableInput
                  options={classOptions}
                  value={batch}
                  setValue={setBatch}
                  fieldName="Batch"
                />
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label htmlFor="batch" className="">
                  Cohort
                </label>
                <SelectScrollableInput
                  options={cohortOptions}
                  value={cohort}
                  setValue={setCohort}
                  fieldName="Cohort"
                />
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label htmlFor="batch" className="">
                  Courses
                </label>

                <CheckboxCourses value={courses} setValue={setCourses} />
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                <label htmlFor="batch" className="">
                  Status
                </label>
                <SelectScrollableInput
                  options={statusOptions}
                  value={status}
                  setValue={setStatus}
                  fieldName="Status"
                />
              </div>

              <Button onClick={submitForm} className="w-full">
                Submit
              </Button>
            </>
          ) : (
            <div className="size-full flex justify-center items-center">
              <p className="text-base text-black/80 font-medium">Loading...</p>
            </div>
          )}
        </form>

        <div
          onClick={() => setOpen(false)}
          className="absolute size-full z-[22]"
        ></div>
      </div>
    </div>
  );
};

export default EditStudentForm;
