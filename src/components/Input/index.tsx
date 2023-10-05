import { SerializedStyles, css } from '@emotion/react';
import { useState } from 'react';

interface Props {
  readonly inputStyle?: SerializedStyles;
}

export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <input
        css={css`
          height: 50px;
          outline: none;
          font-size: 24pt;
          border-bottom: 1px solid #dadce0;
          ${props.inputStyle}
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <div
          css={css`
            height: 2px;
            background: #673ab6;
            animation: AppearUnderline 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            @keyframes AppearUnderline {
              0% {
                opacity: 0;
                transform: scaleX(0);
              }
              100% {
                opacity: 1;
                transform: scaleX(1);
              }
            }
          `}
        />
      )}
    </>
  );
};
