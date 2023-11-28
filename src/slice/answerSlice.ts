import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { QuestionType } from '../types';

export interface Answer {
  id: number;
  type: QuestionType;
  isRequired: boolean;
  value: string;
}

const initialState: Answer[] = [
  {
    id: 1,
    type: 'multiple-choice-questions',
    isRequired: false,
    value: '',
  },
];

export const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    updateAnswer: (state, action: PayloadAction<Answer>) => {
      const { id, type, isRequired, value } = action.payload;
      return state.map((answer) => {
        if (answer.id === id) {
          return {
            ...answer,
            isRequired:
              isRequired !== undefined ? isRequired : answer.isRequired,
            type: type !== undefined ? type : answer.type,
            value: value !== undefined ? value : answer.value,
          };
        }
        return answer;
      });
    },
    initializeAnswers: (_, action: PayloadAction<Answer[]>) => {
      return action.payload;
    },
    // initializeAnswer: (state) => {
    //   return state.map((answer) => {
    //     return {
    //       id: answer.id,
    //       type: answer.type,
    //       isRequired: answer.isRequired,
    //       value: '',
    //     };
    //   });
    // },
  },
});

export const { updateAnswer, initializeAnswers } = answerSlice.actions;

export default answerSlice.reducer;
