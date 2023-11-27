import { css } from '@emotion/react';
import { useRef, useState } from 'react';

export const RadioButtonAnswer = ({
  contents,
  isRequired,
}: {
  contents: string[];
  isRequired: boolean;
}) => {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState<number | null>(null);

  return (
    <div>
      {contents.map((option, idx) => {
        return (
          <label
            key={`${option}-${idx - 0}`}
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              padding: 8px 8px 8px 0;
              p {
                width: ${option.includes('기타')
                  ? '60px'
                  : 'calc(100% - 20px)'};
              }
            `}
          >
            <input
              required={isRequired}
              type="radio"
              name="radio-group"
              css={css`
                width: 20px;
                height: 24px;
                outline: none;
                border-bottom: 1px solid #dadce0;
                font-size: 11pt;
                padding: 2px;
                margin-right: 10px;
              `}
              checked={isChecked === idx}
              onChange={() => {
                textInputRef.current?.focus();
                setIsChecked(idx);
              }}
              onBlur={() => textInputRef.current?.blur()}
            />
            <p>{option.includes('기타') ? '기타: ' : option}</p>
            {option.includes('기타') && (
              <input
                required={isRequired}
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
                    setIsChecked(idx);
                  }
                }}
                onBlur={() => textInputRef.current?.blur()}
              />
            )}
          </label>
        );
      })}
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          height: ${isChecked !== null && isChecked < contents.length
            ? '36px'
            : '0px'};
          transition: height 0.3s ease-in-out;
        `}
      >
        {isChecked !== null && isChecked < contents.length && (
          <button
            type="button"
            css={css`
              width: 70px;
              font-size: 14px;
              padding: 0 8px;
              border-radius: 4px;
              color: #5f6368;
              font-weight: 500;
              line-height: 36px;
              letter-spacing: 0.25px;
              :hover {
                background: #f9f9f9;
              }
            `}
            onClick={() => setIsChecked(null)}
          >
            선택해제
          </button>
        )}
      </div>
    </div>
  );
};
