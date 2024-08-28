import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

export const movieStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
