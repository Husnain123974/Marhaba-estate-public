 

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // This defaults to localStorage for web
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import propertyReducer from './slices/propertyDetailsSlice'; // Import your slice

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage, // The storage engine, here it is localStorage
};

// Create a persisted reducer
const persistedPropertyReducer = persistReducer(persistConfig, propertyReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    property: persistedPropertyReducer,  },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
