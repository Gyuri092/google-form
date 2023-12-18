import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { AnswerArea } from '../../components/Answer/AnswerArea';
import { AnswerTitleArea } from '../../components/Answer/AnswerTitleArea';
import { RootState } from '../../store';
import { Modal } from '../../components/Modal';

export const SurveyPreview = () => {
  const isOpen = useSelector((state: RootState) => state.modal);
  return (
    <div
      css={css`
        height: auto;
        display: flex;
        justify-content: center;
        padding: 50px 0;
        position: relative;
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
      {isOpen && <Modal />}
    </div>
  );
};
