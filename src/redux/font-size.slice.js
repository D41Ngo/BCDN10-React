import { createSlice } from "@reduxjs/toolkit";

const fontSizeSlice = createSlice({
  initialState: 20,
  name: "fontSizeSlice",
  // switch case
  reducers: {
    tang: (state) => {
      return state + 1;
    },
    giam: (state) => {
      return state - 1;
    },
  },
});

// Lấy reducer -> phải là function
export const fontSizeReducer = fontSizeSlice.reducer;

export const { giam, tang } = fontSizeSlice.actions;

function _a() {
  return {
    reducer: () => {},
    actions: {
      giam: () => {},
      tang: () => {},
    },
  };
}
