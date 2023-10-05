import { css } from '@emotion/react';

export const SurveyEditor = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 50%;
          display: flex;
          flex-direction: column;
          border: 1px solid black;
        `}
      >
        <div
          css={css`
            height: 50%;
            border: 1px solid green;
          `}
        >
          title+subscripttion
        </div>
        <div
          css={css`
            height: 50%;
            border: 1px solid red;
          `}
        >
          questions
        </div>
      </div>
    </div>
  );
};
