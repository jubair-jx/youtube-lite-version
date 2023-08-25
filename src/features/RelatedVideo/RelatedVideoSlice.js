import { relatedGetVideo } from "./RelatedVideoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  relatedVideo: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideo = createAsyncThunk(
  "relvideos/fetchRelvideo",
  async ({ tags, id }) => {
    const relatedVideos = await relatedGetVideo({ tags, id });
    return relatedVideos;
  }
);

const RelatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default RelatedVideoSlice.reducer;
