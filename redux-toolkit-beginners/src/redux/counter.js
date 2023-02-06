import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

/**
 *createSlice() here is contains 2thing.reducer and actions in a single file
 *reducer -> reducers:{} and actions means the one we have function in reducers. Example-> increment: (state) => {}
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
