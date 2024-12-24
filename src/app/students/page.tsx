"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { SelectScrollable } from "@/components/SelectScrollable";
import { classOptions, cohortOptions } from "@/constants/studentsPage";
import { Button } from "@/components/ui/button";
import StudentsTable from "@/components/StudentsTable";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import {
  getStudentsData,
  setBatch,
  setCohort,
} from "@/redux/reducers/GetStudentsSlice";

import plus from "@/assets/svg/plus.svg";

import { StudentsDataType } from "@/constants/types";
import CreateStudentForm from "@/components/CreateStudentForm";
import EditStudentForm from "@/components/EditStudentForm";

const Students: React.FC = () => {
  const dispatch = useAppDispatch();

  const cohort: string = useAppSelector(
    (state: RootState) => state.studentsPage.cohort
  );
  const batch: string = useAppSelector(
    (state: RootState) => state.studentsPage.batch
  );

  const students: StudentsDataType[] | null = useAppSelector(
    (state: RootState) => state.studentsPage.data
  );

  const isLoading: boolean = useAppSelector(
    (state: RootState) => state.studentsPage.isLoading
  );

  const [createFormOpen, setCreateFormOpen] = useState<boolean>(false);
  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);
  const [editID, setEditID] = useState<string>("");

  useEffect(() => {
    dispatch(getStudentsData({ cohort, batch }));
  }, [cohort, batch]);

  return (
    <section className="relative grow size-full flex flex-col justify-start items-start gap-10 bg-white rounded-xl p-4">
      <div className="w-full flex flex-row justify-between items-center gap-8">
        <div className="flex flex-row justify-start items-center gap-2">
          <SelectScrollable
            options={cohortOptions}
            dispatchFn={(val: string) => {
              dispatch(setCohort(val));
            }}
          />
          <SelectScrollable
            options={classOptions}
            dispatchFn={(val: string) => {
              dispatch(setBatch(val));
            }}
          />
        </div>

        <Button
          onClick={() => setCreateFormOpen(true)}
          variant={"aman"}
          size={"aman"}
        >
          <div className="shrink-0 size-5 flex justify-center items-center">
            <Image
              src={plus}
              alt="+"
              width={20}
              height={20}
              className="size-full"
            />
          </div>

          <p className="text-base text-[#3F526E] font-bold">Add new Student</p>
        </Button>
      </div>

      {students && (
        <StudentsTable
          students={students}
          setEditFormOpen={setEditFormOpen}
          setEditID={setEditID}
        />
      )}

      {isLoading && (
        <div className="size-full flex justify-center items-center">
          <p className="text-base text-black/80 font-medium">Loading...</p>
        </div>
      )}

      {createFormOpen && <CreateStudentForm setOpen={setCreateFormOpen} />}

      {editFormOpen && (
        <EditStudentForm setOpen={setEditFormOpen} id={editID} />
      )}
    </section>
  );
};

export default Students;
