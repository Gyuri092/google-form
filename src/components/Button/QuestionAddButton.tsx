import { css } from '@emotion/react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { insertQuestion } from '../../slice/questionSlice';

export const QuestionAddButton = () => {
  const dispatch = useDispatch();
  const payload = {
    id: 1,
    type: 'multiple-choice-questions',
    title: '',
    contents: ['옵션 1'],
    isRequired: false,
  };
  return (
    <div
      css={css`
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dadce0;
        border-radius: 8px;
        margin-left: 20px;
        position: sticky;
        top: 380px;
        box-sizing: border-box;
        box-shadow:
          0 3px 3px rgba(0, 0, 0, 0.12),
          0 1px 1px rgba(0, 0, 0, 0.14),
          0 1px 2px rgba(0, 0, 0, 0.2);
        background: #fff;
      `}
    >
      <button
        type="button"
        css={css`
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          :hover {
            background: #f3f3f3;
          }
          svg {
            width: 24px;
            height: 24px;
          }
          svg > path {
            fill: #5f6368;
          }
        `}
        onClick={() => {
          dispatch(insertQuestion(payload));
        }}
      >
        <AiOutlinePlusCircle />
      </button>
    </div>
  );
};
