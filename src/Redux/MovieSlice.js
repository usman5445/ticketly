import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../Apis/Movie-apis";

export const getAllMoviesThunk = createAsyncThunk(
  "MovieSlice/getAllMovies",
  async () => {
    return getAllMovies();
  }
);

export const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState: { isLoading: false, data: [], error: "" },
  extraReducers: (builder) => {
    builder.addCase(getAllMoviesThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMoviesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = "";
    });
    builder.addCase(getAllMoviesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export const MovieReducers = MovieSlice.reducer;
