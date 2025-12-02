import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasicState {
  isOnBoarded: boolean | null;
}

const initialState: BasicState = {
  isOnBoarded: false,
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    setIsOnBoarded(state, action: PayloadAction<boolean | null>) {
      state.isOnBoarded = action.payload;
    },
  },
});

export const { setIsOnBoarded } = basicSlice.actions;
export default basicSlice.reducer;


