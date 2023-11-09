import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string[] = ['옵션 1'];

export const questionOptionSlice = createSlice({
  name: 'questionOption',
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeOption: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    updateOptions: (_, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { addOption, removeOption, updateOptions } =
  questionOptionSlice.actions;

export default questionOptionSlice.reducer;
