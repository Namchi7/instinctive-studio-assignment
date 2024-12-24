"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CheckboxCourses: React.FC<{
  value?: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ value, setValue }) => {
  const pushToValueArr = (checked: boolean, val: string) => {
    setValue((prev: string[]) => {
      if (checked) {
        return [...prev, val];
      } else {
        return prev.filter((v) => v !== val);
      }
    });
  };

  return (
    <div className="items-top flex justify-start items-center gap-4">
      <div className="flex flex-row justify-start items-center gap-1">
        <Checkbox
          id="sci"
          checked={value && value.includes("sci") ? true : false}
          onCheckedChange={(checked: boolean) => {
            pushToValueArr(checked, "sci");
          }}
        />
        <p>Science</p>
      </div>

      <div className="flex flex-row justify-start items-center gap-1">
        <Checkbox
          id="math"
          checked={value && value.includes("math") ? true : false}
          onCheckedChange={(checked: boolean) => {
            pushToValueArr(checked, "math");
          }}
        />
        <p>Math</p>
      </div>

      <div className="flex flex-row justify-start items-center gap-1">
        <Checkbox
          id="cs"
          checked={value && value.includes("cs") ? true : false}
          onCheckedChange={(checked: boolean) => {
            pushToValueArr(checked, "cs");
          }}
        />
        <p>CS</p>
      </div>

      <div className="flex flex-row justify-start items-center gap-1">
        <Checkbox
          id="eng"
          checked={value && value.includes("eng") ? true : false}
          onCheckedChange={(checked: boolean) => {
            pushToValueArr(checked, "eng");
          }}
        />
        <p>English</p>
      </div>
    </div>
  );
};

export default CheckboxCourses;
