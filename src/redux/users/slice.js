import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsers } from './operations';
import { getUser } from './operations';
import { deleteUser } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.users.isLoading = false;
  state.users.error = null;
};

const handleFetchAllFulfilled = (state, { payload }) => {
  state.users.items = payload;
};

const handleFetchSingleFulfilled = (state, { payload }) => {
  state.users.currentUser = payload;
};

const handleDeleteUserFulfilled = (state, { payload }) => {
  state.users.items = state.users.items.filter(user => user.id !== payload);
};

const handleRejected = (state, { payload }) => {
  state.users.isLoading = false;
  state.users.error = payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {
      items: [],
      isLoading: false,
      error: null,
      currentUser: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, handleFetchAllFulfilled)
      .addCase(getUser.fulfilled, handleFetchSingleFulfilled)
      .addCase(deleteUser.fulfilled, handleDeleteUserFulfilled)
      .addMatcher(
        isAnyOf(getUsers.pending, getUser.pending, deleteUser.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getUsers.rejected, getUser.rejected, deleteUser.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(getUsers.fulfilled, getUser.fulfilled, deleteUser.fulfilled),
        handleFulfilled
      );
  },
});

export const usersReducer = usersSlice.reducer;
