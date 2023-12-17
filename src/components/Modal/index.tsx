import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../slice/modalSlice';
import { initializeAnswers } from '../../slice/answerSlice';
import { RootState } from '../../store';

export const Modal = () => {
  const questions = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch();
  const initialAnswers = questions.map((question) => {
    return {
      id: question.id,
      type: question.type,
      isRequired: question.isRequired,
      value: '',
      checked: undefined,
    };
  });
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background: #00000080;
        position: absolute;
        top: 0;
        left: 0;
        cursor: initial;
      `}
    >
      <div
        css={css`
          z-index: 2;
          box-sizing: border-box;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 24em;
          height: 144px;
          background: #fff;
          border-radius: 8px;
          box-shadow:
            0 1px 3px 0 #3c40434d,
            0 4px 8px 3px #3c404326;
          overflow: hidden;
          transition: transform 0.225s cubic-bezier(0, 0, 0.2, 1);
          color: #202124;
          p,
          div {
            width: auto;
            height: auto;
            text-align: start;
          }
        `}
      >
        <p
          css={css`
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 0.1px;
            line-height: 24px;
            margin: 18px 24px 16px 24px;
          `}
        >
          양식을 지우시겠습니까?
        </p>
        <p
          css={css`
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.2px;
            line-height: 20px;
            padding: 4px 24px 0 24px;
          `}
        >
          모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.
        </p>
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 16px 8px 8px 24px;
            button {
              width: auto;
              height: 36px;
              color: #5f6368;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0.25px;
              line-height: 36px;
              border-radius: 4px;
              padding: 0 8px;
              margin-left: 8px;
              :hover {
                background: #f9f9f9;
              }
            }
          `}
        >
          <button type="button" onClick={() => dispatch(openModal(false))}>
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(initializeAnswers(initialAnswers));
              dispatch(openModal(false));
            }}
          >
            양식 지우기
          </button>
        </div>
      </div>
    </div>
  );
};
