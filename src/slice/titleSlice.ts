import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface title {
  title: string;
  description: string;
}

const initialState: title = {
  title: '',
  description: '',
};

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      return { ...state, title: action.payload };
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      return { ...state, description: action.payload };
    },
  },
});

export const { updateTitle, updateDescription } = titleSlice.actions;

export default titleSlice.reducer;
