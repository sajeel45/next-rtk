import {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
  isFulfilled,
} from "@reduxjs/toolkit";

const initialState = {
//   users:JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  users: [],
  userApiData: [],
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});
const slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("Action", action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
        console.log(action);
      state.isLoading = false;
      state.userApiData = action.payload;
    });
  },
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer;
