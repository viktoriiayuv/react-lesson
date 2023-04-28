import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      const newUsers = state.users.filter(user => user.id !== action.payload);
      state.users = newUsers;
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
