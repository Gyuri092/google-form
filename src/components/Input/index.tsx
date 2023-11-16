import { SerializedStyles, css } from '@emotion/react';
import { useState } from 'react';

interface Props {
  readonly key?: string;
  readonly name?: string;
  readonly placeholder?: string;
  readonly defaultValue?: string;
  readonly inputStyle?: SerializedStyles;
  readonly borderStyle?: SerializedStyles;
  readonly disabled?: boolean;
}

export const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      key={props.key}
      css={css`
        height: auto;
        position: relative;
      `}
    >
      <input
        disabled={props.disabled}
        type="text"
        name={props.name}
        css={css`
          height: 50px;
          outline: none;
          font-size: 24pt;
          border-bottom: 1px solid #dadce0;
          ${props.inputStyle}
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      {isFocused && (
        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
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
            ${props.borderStyle}
          `}
        />
      )}
    </div>
  );
};
