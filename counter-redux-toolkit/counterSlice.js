import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament(state, { payload }) {
      state.count += payload;
    },
    decreament(state, { payload }) {
      state.count -= payload;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
