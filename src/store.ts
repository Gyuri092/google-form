import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slice/questionSlice';
import titleReducer from './slice/titleSlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    title: titleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
