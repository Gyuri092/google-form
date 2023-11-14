import { css } from '@emotion/react';
import { QuestionArea } from '../../components/QuestionArea';
import { TitleArea } from '../../components/TitleArea';

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
          width: 770px;
          display: flex;
          flex-direction: column;
          @media (max-width: 771px) {
            width: 100%;
          }
        `}
      >
        <TitleArea />
        <QuestionArea />
      </div>
    </div>
  );
};
