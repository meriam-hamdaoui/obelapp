import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    createUser: (state, action) => action.payload,
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
