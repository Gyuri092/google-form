import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeQuestionType } from '../../slice/questionSlice';

export const QuestionTypeSelectBox = ({
  questionIndex,
}: {
  questionIndex: number;
}) => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.questions);
  return (
    <select
      name="question-option"
      id=""
      css={css`
        width: 208px;
        height: 48px;
        border-radius: 4px;
        border: 1px solid #dadce0;
        text-align: center;
        padding: 8px 48px;
        outline: none;
      `}
      value={questions[questionIndex]?.type || 'multiple-choice-questions'}
      onChange={(e) =>
        dispatch(
          changeQuestionType({ id: questionIndex + 1, type: e.target.value }),
        )
      }
    >
      <option value="short-answer">단답형</option>
      <option value="long-sentence">장문형</option>
      <option value="multiple-choice-questions">객관식 질문</option>
      <option value="check-box">체크 박스</option>
      <option value="drop-down">드롭 다운</option>
    </select>
  );
};
