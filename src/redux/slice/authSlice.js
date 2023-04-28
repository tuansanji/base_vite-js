import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    auth: "",
  },

  reducers: {
    setAuth(state) {
      state.auth = "test";
    },
  },
});

export const { setAuth } = projectSlice.actions;
