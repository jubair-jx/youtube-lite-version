import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videoReducer from "../features/videos/VideoSlice";

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
