import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import questionReducer from './slice/questionSlice';
import titleReducer from './slice/titleSlice';
import answerReducer from './slice/answerSlice';

const reducers = combineReducers({
  questions: questionReducer,
  title: titleReducer,
  answers: answerReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['questions', 'title', 'answers'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
