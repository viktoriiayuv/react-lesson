import { usersReducer } from './users/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: usersReducer,
});
