import { css } from '@emotion/react';
import { AnswerArea } from '../../components/AnswerArea';
import { AnswerTitleArea } from '../../components/AnswerTitleArea';

export const SurveyPreview = () => {
  return (
    <div
      css={css`
        height: auto;
        display: flex;
        justify-content: center;
        padding: 50px 0;
      `}
    >
      <div
        css={css`
          width: 770px;
          display: flex;
          flex-direction: column;
          @media (max-width: 771px) {
            width: 100%;
          }
        `}
      >
        <AnswerTitleArea />
        <AnswerArea />
      </div>
    </div>
  );
};
