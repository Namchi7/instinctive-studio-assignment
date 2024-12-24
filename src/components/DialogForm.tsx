import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateStudentForm } from "@/components/CreateStudentForm";
import { EditStudentForm } from "@/components/EditStudentForm";

const DialogForm: React.FC<{
  type: "add" | "edit";
}> = ({ type }) => {
  return (
    <Dialog>
      <DialogTrigger>{type === "add" ? "Add" : "Edit"}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{"Form"}</DialogTitle>
        </DialogHeader>
        {/* {children} */}
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
