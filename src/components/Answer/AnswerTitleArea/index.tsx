import { css } from '@emotion/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../../Input';
import { RootState } from '../../../store';

export const AnswerTitleArea = () => {
  const [isFocused, setIsFocused] = useState(false);
  const title = useSelector((state: RootState) => state.title);
  const questions = useSelector((state: RootState) => state.questions);
  const isIncludeRequiredQuetion = questions.find(
    (question) => question.isRequired,
  );
  return (
    <div
      css={css`
        height: auto;
        position: relative;
        margin-bottom: 14px;
        background: #fff;
        border-radius: 8px;
        border: 1px solid #dadce0;
        padding: 30px 20px;
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: #673ab6;
          border-radius: 8px 8px 0 0;
          z-index: 1;
        `}
      />
      <form
        css={css`
          width: 100%;
          border-radius: 8px;
          box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
            ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
            ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
          position: relative;
          input {
            background: #fff;
            color: #000;
            border: none;
          }
        `}
      >
        {isFocused && (
          <div
            css={css`
              position: absolute;
              left: -1px;
              top: 1px;
              width: 6px;
              background: #4285f4;
              border-radius: 8px 0 0 8px;
            `}
          />
        )}
        <Input disabled placeholder="설문지 제목" value={title.title} />
        <Input
          disabled
          placeholder="설문지 설명"
          inputStyle={css`
            font-size: 11pt;
          `}
          value={title.description}
        />
      </form>
      {isIncludeRequiredQuetion && (
        <div>
          <div
            css={css`
              position: absolute;
              left: 0;
              width: 100%;
              height: 1px;
              background: #dadce0;
            `}
          />
          <div
            css={css`
              color: #d93025;
              font-size: 14px;
              padding-top: 20px;
            `}
          >
            * 표시는 필수 질문임
          </div>
        </div>
      )}
    </div>
  );
};
