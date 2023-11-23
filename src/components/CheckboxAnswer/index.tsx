import { css } from '@emotion/react';
import { useRef, useState } from 'react';

export const CheckboxAnswer = ({ contents }: { contents: string[] }) => {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  return contents.map((option, idx) => {
    if (!option.includes('기타')) {
      return (
        <label
          key={`${option}-${idx - 0}`}
          css={css`
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px 8px 8px 0;
            p {
              width: calc(100% - 20px);
            }
          `}
        >
          <input
            type="checkbox"
            css={css`
              width: 20px;
              height: 24px;
              outline: none;
              border-bottom: 1px solid #dadce0;
              font-size: 11pt;
              padding: 2px;
              margin-right: 10px;
            `}
          />
          <p>{option}</p>
        </label>
      );
    }

    return (
      <label
        key={`${option}-${idx - 0}`}
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          padding: 8px 8px 8px 0;
          p {
            width: 60px;
          }
        `}
      >
        <input
          type="checkbox"
          css={css`
            width: 20px;
            height: 24px;
            outline: none;
            border-bottom: 1px solid #dadce0;
            font-size: 11pt;
            padding: 2px;
            margin-right: 10px;
          `}
          onChange={() => {
            textInputRef.current?.focus();
            setIsChecked((prev) => !prev);
          }}
          onBlur={() => textInputRef.current?.blur()}
          checked={isChecked}
        />
        <p>기타: </p>
        <input
          type="text"
          ref={textInputRef}
          css={css`
            width: calc(100% - 100px);
            height: 24px;
            outline: none;
            border-bottom: 1px solid #dadce0;
            font-size: 11pt;
            padding: 2px;
            margin-right: 10px;
          `}
          defaultValue=""
          onChange={(e) => {
            if (e.target.value) {
              setIsChecked(true);
            }
          }}
        />
      </label>
    );
  });
};
