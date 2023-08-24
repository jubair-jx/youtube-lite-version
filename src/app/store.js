import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videoReducer from "../features/videos/VideoSlice";
import tagSlice from "../features/Tags/tagSlice";
import dyVideoSlice from "../features/video/dyVideoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    dyVideo: dyVideoSlice,
    tags: tagSlice,
  },
});
