import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import uiReducer from './uiSlice';
import themeReducer from './themeSlice';

export const reduxStore = configureStore({
  reducer: {
    posts: postReducer,
    ui: uiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
