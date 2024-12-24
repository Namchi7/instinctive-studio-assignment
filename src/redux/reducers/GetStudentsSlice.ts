import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StudentsDataType } from "@/constants/types";
import { fetchStudentsRecords } from "@/lib/studentsAPI";

export interface GetStudentsSliceInitialSliceType {
  isLoading: boolean;
  cohort: string;
  batch: string;
  data: StudentsDataType[] | null;
  isError: boolean;
}

export interface FiltersType {
  cohort: string;
  batch: string;
}

export const getStudentsData = createAsyncThunk(
  "students/getStudentsData",
  async (filters: FiltersType) => {
    const data: StudentsDataType[] = await fetchStudentsRecords(filters);

    return data;
  }
);

const initialState: GetStudentsSliceInitialSliceType = {
  isLoading: false,
  cohort: "2024-25",
  batch: "cbse9",
  data: null,
  isError: false,
};

const getStudentsSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {
    setCohort: (state, action: PayloadAction<string>) => {
      state.cohort = action.payload;
    },
    setBatch: (state, action: PayloadAction<string>) => {
      state.batch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudentsData.pending, (state) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(getStudentsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(getStudentsData.rejected, (state) => {
      state.isLoading = false;
      state.data = null;
      state.isError = true;
    });
  },
});

export default getStudentsSlice.reducer;

export const { setCohort, setBatch } = getStudentsSlice.actions;
