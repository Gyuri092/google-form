import { configureStore } from '@reduxjs/toolkit';
import questionTypeReducer from './slice/questionTypeSlice';
import questionReducer from './slice/questionSlice';
import questionOptionReducer from './slice/questionOptionSlice';

export const store = configureStore({
  reducer: {
    questionType: questionTypeReducer,
    questions: questionReducer,
    questionOption: questionOptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
