// store.ts
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './slices/propertyDetailsSlice'; // Create this in Step 3

export const store = configureStore({
  reducer: {
    property: propertyReducer, // Register your property slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
