import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './slice/questionTypeSlice';
import questionReducer from './slice/questionSlice';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    questions: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
