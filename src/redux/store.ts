import { configureStore } from "@reduxjs/toolkit";

import studentPageReducer from "./reducers/GetStudentsSlice";

export const store = configureStore({
  reducer: {
    studentsPage: studentPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
