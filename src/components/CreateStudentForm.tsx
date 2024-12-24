"use client ";

import React, { useState } from "react";

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
} from "@/constants/types";

import { createStudentRecord } from "@/lib/studentsAPI";

const CreateStudentForm: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpen }) => {
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
      name: name,
      batch: batch,
      cohort: cohort,
      courses: coursesStr,
      status: status ? status : "online",
    };

    const res: CreateStudentResponseType = await createStudentRecord(data);

    if (res.success) {
      setOpen(false);
      toast("Record created successfully.");
    } else {
      toast(`Error while creating record.\nPlease try again.`);
    }
  };

  return (
    <div className="fixed inset-0 size-full z-10">
      <div className="relative size-full flex justify-center items-center bg-black/80 p-4 z-[11]">
        <form className="absolute w-full max-w-[34rem] flex flex-col justify-start items-center gap-3 bg-white rounded-lg p-4 z-[13]">
          <p className="w-full text-left text-2xl text-black font-bold">
            Add Student Record
          </p>

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

            <CheckboxCourses setValue={setCourses} />
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

          <Button type="submit" onClick={submitForm} className="w-full">
            Submit
          </Button>
        </form>

        <div
          onClick={() => setOpen(false)}
          className="absolute size-full z-[12]"
        ></div>
      </div>
    </div>
  );
};

export default CreateStudentForm;
