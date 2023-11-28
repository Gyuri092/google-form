import { css } from '@emotion/react';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnswer } from '../../../slice/answerSlice';
import { Questions } from '../../../slice/questionSlice';
import { CheckboxAnswer } from '../CheckboxAnswer';
import { DropDownAnswer } from '../DropDownAnswer';
import { RadioButtonAnswer } from '../RadioButtonAnswer';

export const AnswerInput = ({ item }: { item: Questions }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch();
  const { id, type, isRequired } = item;

  const renderAnswer = () => {
    if (type === 'multiple-choice-questions') {
      return <RadioButtonAnswer item={item} />;
    }
    if (type === 'check-box') {
      return <CheckboxAnswer item={item} />;
    }
    if (type === 'drop-down') {
      return <DropDownAnswer item={item} />;
    }
    if (type === 'short-answer') {
      return (
        <input
          required={isRequired}
          type="text"
          name="short-answer"
          placeholder="내 답변"
          css={css`
            width: 50%;
            height: 24px;
            outline: none;
            border-bottom: 1px solid #dadce0;
            font-size: 11pt;
            padding: 2px;
          `}
          onChange={(e) =>
            dispatch(
              updateAnswer({
                id,
                type,
                isRequired,
                value: e.target.value,
              }),
            )
          }
        />
      );
    }
    return (
      <textarea
        required={isRequired}
        ref={textAreaRef}
        placeholder="내 답변"
        name="long-sentence"
        css={css`
          width: 100%;
          outline: none;
          border-bottom: 1px solid #dadce0;
          font-size: 11pt;
          padding: 2px;
          resize: none;
        `}
        rows={1}
        onChange={(e) => {
          if (!textAreaRef.current) return;
          textAreaRef.current.style.height = 'auto';
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
          dispatch(
            updateAnswer({
              id,
              type,
              isRequired,
              value: e.target.value,
            }),
          );
        }}
      />
    );
  };
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      {renderAnswer()}
    </div>
  );
};
