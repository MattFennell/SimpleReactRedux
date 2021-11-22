import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
  counterTwo: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("action", action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counterValue += action.payload;
      state.counterTwo += action.payload;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
