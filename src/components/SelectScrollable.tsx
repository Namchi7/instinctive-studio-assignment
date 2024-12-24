"use client";

import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectScrollableOptionType } from "@/constants/types";

export const SelectScrollable: React.FC<{
  options: SelectScrollableOptionType[];
  dispatchFn: (val: string) => void;
}> = ({ options, dispatchFn }) => {
  const [value, setValue] = useState<string>(options[0].value);

  useEffect(() => {
    dispatchFn(value);
  }, [value, dispatchFn]);

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-fit flex flex-row justify-start items-center gap-[0.625rem] text-base text-[#3F526E] font-bold bg-[#E9EDF1] border-none outline-none px-4 py-2">
        <SelectValue
          placeholder={options[0].title}
          defaultValue={options[0].value}
        />
      </SelectTrigger>

      <SelectContent>
        {options.map((option, i: number) => (
          <SelectItem
            value={option.value}
            className="text-base text-[#3F526E] font-bold"
            key={i}
          >
            {option.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const SelectScrollableInput: React.FC<{
  options: SelectScrollableOptionType[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fieldName?: string;
}> = ({ options, value, setValue }) => {
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full flex flex-row justify-between items-center gap-[0.625rem] text-base text-[#3F526E] font-normal bg-[#E9EDF1] border-none outline-none px-4 py-2">
        <SelectValue
          placeholder={options[0].title}
          defaultValue={options[0].value}
        />
      </SelectTrigger>

      <SelectContent>
        {options.map((option, i: number) => (
          <SelectItem
            value={option.value}
            className="text-base text-[#3F526E] font-normal"
            key={i}
          >
            {option.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
