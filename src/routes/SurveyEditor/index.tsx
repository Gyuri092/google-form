import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { QuestionArea } from '../../components/QuestionArea';
import { TitleArea } from '../../components/TitleArea';
import { RootState } from '../../store';

export const SurveyEditor = () => {
  const questions = useSelector((state: RootState) => state.questions);
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
        {questions.map((item, index) => (
          <QuestionArea key={`${item.title}-${index - 0}`} value={item} />
        ))}
      </div>
    </div>
  );
};
