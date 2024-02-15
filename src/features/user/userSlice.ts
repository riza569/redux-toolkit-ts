// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };
// export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((resp) => resp.data);
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//       state.error = "";
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.users = [];
//       state.error = action.error.message;
//     });
//   },
// });
// export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialState = {
  users: User[];
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  users: [],
  error: "",
  loading: false,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || "something went wrong";
      state.loading = false;
      state.users = [];
    });
  },
});
export default userSlice.reducer;
