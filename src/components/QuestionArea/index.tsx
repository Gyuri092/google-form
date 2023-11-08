import { css } from '@emotion/react';
import { useState } from 'react';
import { Input } from '../Input';
import { QuestionOption } from '../QuestionOption';
import { QuestionTypeSelectBox } from '../QuestionTypeSelectBox';

export const QuestionArea = () => {
  const [isFocused, setIsFocused] = useState(true);
  return (
    <form
      css={css`
        /* height: ${isFocused ? '323px' : '176px'}; */
        height: auto;
        border: 1px solid #dadce0;
        border-radius: 8px;
        padding: 20px;
        position: relative;
        box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
          ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
          ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {
        isFocused && (
          <div
            css={css`
              position: absolute;
              left: -1px;
              top: 0;
              width: 6px;
              background: #4285f4;
              border-radius: 8px 0 0 8px;
            `}
          />
        )
        // : (
        // <div
        //   css={css`
        //     position: absolute;
        //     left: 0;
        //     top: 0;
        //     width: 6px;
        //     background: #137333;
        //     border-radius: 8px 0 0 8px;
        //   `}
        // />
        // )
      }
      <div
        css={css`
          height: 50px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        `}
      >
        <div
          css={css`
            width: 446px;
          `}
        >
          <Input
            placeholder="질문"
            inputStyle={css`
              font-size: 11pt;
              padding: 16px;
              &:focus {
                background-color: #f1f3f4;
                &:hover {
                  background-color: #0000001a;
                }
              }
            `}
          />
        </div>
        <QuestionTypeSelectBox />
      </div>
      <QuestionOption />
    </form>
  );
};
