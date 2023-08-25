const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSeleted: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { tagSeleted, tagRemoved, searched } = filterSlice.actions;
