import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import questionReducer from './slice/questionSlice';
import titleReducer from './slice/titleSlice';

const reducers = combineReducers({
  questions: questionReducer,
  title: titleReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['questions', 'title'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
