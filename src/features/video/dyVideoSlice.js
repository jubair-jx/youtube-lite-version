import { getDyVideo } from "./dyVideoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  dyVideo: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchDyVideo = createAsyncThunk(
  "dyVideos/fetchDyVideo",
  async (id) => {
    const videos = await getDyVideo(id);
    return videos;
  }
);

const dyVideoSlice = createSlice({
  name: "dyVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDyVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchDyVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dyVideo = action.payload;
      })
      .addCase(fetchDyVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.dyVideo = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default dyVideoSlice.reducer;
