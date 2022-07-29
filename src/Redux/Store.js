import { configureStore } from "@reduxjs/toolkit";
import { MovieReducers } from "./MovieSlice";
export const store = configureStore({
  reducer: {
    MovieReducers,
  },
});
