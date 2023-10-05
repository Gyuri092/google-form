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
      <Input />
    </form>
  );
};
