import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  user: [
    {
      id: uuidv4(),
      role: "admin",
    },
    {
      id: uuidv4(),
      role: "school",
    },
    {
      id: uuidv4(),
      role: "teacher",
    },
    {
      id: uuidv4(),
      role: "parent",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => action.payload,
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
