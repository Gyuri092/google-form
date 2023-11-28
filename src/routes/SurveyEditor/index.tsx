import { css } from '@emotion/react';
import { QuestionAddButton } from '../../components/Button/QuestionAddButton';
import { QuestionArea } from '../../components/Question/QuestionArea';
import { TitleArea } from '../../components/Question/TitleArea';
import { Header } from '../../components/Header';

export const SurveyEditor = () => {
  return (
    <>
      <Header />
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
          <TitleArea />
          <QuestionArea />
        </div>
        <QuestionAddButton />
      </div>
    </>
  );
};
