import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './slice/questionTypeSlice';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
