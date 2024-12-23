import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    logoutUser: (state) => {
      state.user = {};
    },
  },
});

export const { logoutUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
