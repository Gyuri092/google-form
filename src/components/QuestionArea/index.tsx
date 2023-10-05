import { css } from '@emotion/react';
import { useState } from 'react';
import { Input } from '../Input';

export const QuestionArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <form
      css={css`
        height: 50%;
        border: 1px solid #dadce0;
        border-radius: 8px;
        padding: 20px;
        position: relative;
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {isFocused && (
        <div
          css={css`
            position: absolute;
            left: 0;
            top: 0;
            width: 6px;
            background: #4285f4;
            border-radius: 8px 0 0 8px;
          `}
        />
      )}
      <div
        css={css`
          display: flex;
        `}
      >
        <Input />
        <select
          name="question-option"
          id=""
          css={css`
            width: 208px;
            height: 48px;
            border-radius: 4px solid #dadce0;
            outline: none;
          `}
        >
          <option value="short-answer">단답형</option>
          <option value="long-sentence">장문형</option>
          <option value="multiple-choice-questions">객관식 질문</option>
          <option value="check-box">체크 박스</option>
          <option value="drop-down">드롭 다운</option>
        </select>
      </div>
    </form>
  );
};
