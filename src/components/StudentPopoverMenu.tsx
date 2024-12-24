"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import options from "@/assets/svg/options.svg";
import { deleteStudentRecord } from "@/lib/studentsAPI";
import { toast } from "sonner";

const StudentPopoverMenu: React.FC<{
  id: string;
  setEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditID: React.Dispatch<React.SetStateAction<string>>;
}> = ({ id, setEditFormOpen, setEditID }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleStudentRecordDelete = async () => {
    const res = await deleteStudentRecord(id);

    if (res.success) {
      toast("Record deleted.");
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={(o: boolean) => setOpen(o)}>
      <PopoverTrigger>
        <div className="size-5 flex justify-center items-center bg-gray-100 hover:bg-gray-300 rounded-full hover:cursor-pointer overflow-hidden">
          <Image
            src={options}
            alt="i"
            width={20}
            height={20}
            className="size-[0.875rem]"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit flex justify-center items-center gap-0 p-1"
        align="end"
      >
        <ul className="flex flex-col justify-start items-start">
          <li
            onClick={() => {
              setOpen(false);
              setEditFormOpen(true);
              setEditID(id);
            }}
            className="w-full min-w-20 text-xs text-black font-medium bg-white hover:bg-gray-100 rounded-sm hover:cursor-pointer px-2 py-2"
          >
            Edit
          </li>
          <li
            onClick={handleStudentRecordDelete}
            className="w-full min-w-20 text-xs text-red-500 font-medium bg-white hover:bg-gray-100 rounded-sm hover:cursor-pointer px-2 py-2"
          >
            Delete
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default StudentPopoverMenu;
