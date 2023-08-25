import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videoReducer from "../features/videos/VideoSlice";
import tagSlice from "../features/Tags/tagSlice";
import dyVideoSlice from "../features/video/dyVideoSlice";
import RelatedVideoSlice from "../features/RelatedVideo/RelatedVideoSlice";
import filterSlice from "../features/filterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    RelatedVideos: RelatedVideoSlice,
    dyVideo: dyVideoSlice,
    tags: tagSlice,
    filter: filterSlice,
  },
});
