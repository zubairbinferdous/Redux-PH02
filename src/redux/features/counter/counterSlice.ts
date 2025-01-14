import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    remove: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { add, remove } = counterSlice.actions;
export default counterSlice.reducer;
