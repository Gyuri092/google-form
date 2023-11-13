import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Questions {
  id: number;
  type: string;
  title: string;
  contents: string[];
  isRequired: boolean;
}

const initialState: Questions[] = [
  {
    id: 1,
    type: 'multiple-choice-questions',
    title: '',
    contents: ['옵션 1'],
    isRequired: false,
  },
];

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    insertQuestion: (state, action: PayloadAction<Questions>) => {
      const id = state.length + 1;
      state.push({ ...action.payload, id });
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    addOption: (
      state,
      action: PayloadAction<{ id: number; option: string }>,
    ) => {
      const { id, option } = action.payload;
      return state.map((q) =>
        q.id === id ? { ...q, contents: [...q.contents, option] } : q,
      );
    },
    removeOption: (
      state,
      action: PayloadAction<{ id: number; index: number }>,
    ) => {
      const { id, index } = action.payload;
      return state.map((q) =>
        q.id === id
          ? { ...q, contents: q.contents.filter((_, i) => i !== index) }
          : q,
      );
    },
    updateOptions: (
      state,
      action: PayloadAction<{ id: number; options: string[] }>,
    ) => {
      const { id, options } = action.payload;
      return state.map((q) => (q.id === id ? { ...q, contents: options } : q));
    },
  },
});

export const {
  insertQuestion,
  removeQuestion,
  addOption,
  removeOption,
  updateOptions,
} = questionSlice.actions;

export default questionSlice.reducer;
