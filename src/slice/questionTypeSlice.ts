import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface selectedType {
  value: string;
}

const initialState: selectedType = {
  value: 'multiple-choice-questions',
};

export const questionTypeSlice = createSlice({
  name: 'questionType',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = questionTypeSlice.actions;

export default questionTypeSlice.reducer;
