import { css } from '@emotion/react';
import { Input } from '../../components/Input';

export const SurveyEditor = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding: 50px 0;
      `}
    >
      <div
        css={css`
          width: 50%;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            min-height: 20%;
            max-height: 30%;
            position: relative;
            margin-bottom: 14px;
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 100%;
              height: 10px;
              background: #673ab6;
              border-radius: 8px 8px 0 0;
            `}
          />
          <div
            css={css`
              width: 100%;
              border: 1px solid green;
              border: 1px solid #dadce0;
              border-radius: 8px;
              box-shadow:
                0 3px 3px rgba(0, 0, 0, 0.12),
                0 1px 1px rgba(0, 0, 0, 0.14),
                0 1px 2px rgba(0, 0, 0, 0.2);
              padding: 30px 20px;
            `}
          >
            <Input />
          </div>
        </div>
        <div
          css={css`
            height: 50%;
            border: 1px solid #dadce0;
            border-radius: 8px;
            padding: 20px;
          `}
        >
          questions
        </div>
      </div>
    </div>
  );
};
