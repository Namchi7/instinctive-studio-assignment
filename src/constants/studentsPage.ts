import { SelectScrollableOptionType } from "./types";

export const cohortOptions: SelectScrollableOptionType[] = [
  {
    title: "AY 2024-25",
    value: "2024-25",
  },
  {
    title: "AY 2023-24",
    value: "2023-24",
  },
  {
    title: "AY 2022-23",
    value: "2022-23",
  },
  {
    title: "AY 2021-22",
    value: "2021-22",
  },
];

export const classOptions: SelectScrollableOptionType[] = [
  { value: "cbse9", title: "CBSE 9" },
  { value: "cbse10", title: "CBSE 10" },
  { value: "cbse11", title: "CBSE 11" },
  { value: "cbse12", title: "CBSE 12" },
];

export const statusOptions: SelectScrollableOptionType[] = [
  { value: "online", title: "Active" },
  { value: "offline", title: "Inactive" },
];
