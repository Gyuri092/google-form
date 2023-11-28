import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (_, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;
