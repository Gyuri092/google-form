import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Questions {
  type: string;
  title: string;
  contents?: string[];
  isRequired: boolean;
}

const initialState: Questions[] = [
  {
    type: 'multiple-choice-questions',
    title: '',
    isRequired: false,
  },
];

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    insertArray: (state, action: PayloadAction<Questions>) => {
      state.push(action.payload);
    },
  },
});

export const { insertArray } = questionSlice.actions;

export default questionSlice.reducer;
