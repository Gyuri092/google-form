import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [''];

export const questionOptionSlice = createSlice({
  name: 'questionOption',
  initialState,
  reducers: {
    addOption: (state) => {
      state.push('');
    },
    removeOption: (state) => {
      state.pop();
    },
  },
});

export const { addOption } = questionOptionSlice.actions;

export default questionOptionSlice.reducer;
