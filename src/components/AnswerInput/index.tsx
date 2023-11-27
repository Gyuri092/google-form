import { css } from '@emotion/react';

import { useRef } from 'react';
import { Questions } from '../../slice/questionSlice';
import { CheckboxAnswer } from '../CheckboxAnswer';
import { DropDownAnswer } from '../DropDownAnswer';
import { RadioButtonAnswer } from '../RadioButtonAnswer';

export const AnswerInput = ({ item }: { item: Questions }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const { type, contents, isRequired } = item;
  const renderAnswer = () => {
    if (type === 'multiple-choice-questions') {
      return <RadioButtonAnswer contents={contents} isRequired={isRequired} />;
    }
    if (type === 'check-box') {
      return <CheckboxAnswer contents={contents} isRequired={isRequired} />;
    }
    if (type === 'drop-down') {
      return <DropDownAnswer contents={contents} isRequired={isRequired} />;
    }
    if (type === 'short-answer') {
      return (
        <input
          required={isRequired}
          type="text"
          placeholder="내 답변"
          css={css`
            width: 50%;
            height: 24px;
            outline: none;
            border-bottom: 1px solid #dadce0;
            font-size: 11pt;
            padding: 2px;
          `}
          defaultValue=""
        />
      );
    }
    return (
      <textarea
        ref={textAreaRef}
        placeholder="내 답변"
        css={css`
          width: 100%;
          outline: none;
          border-bottom: 1px solid #dadce0;
          font-size: 11pt;
          padding: 2px;
          resize: none;
        `}
        rows={1}
        onChange={() => {
          if (!textAreaRef.current) return;
          textAreaRef.current.style.height = 'auto';
          textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
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
