import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export const AnswerSubmitArea = () => {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        button {
          height: 36px;
          border-radius: 4px;
        }
      `}
    >
      <button
        type="button"
        css={css`
          width: 72px;
          background: #673ab6;
          color: #fff;
          :hover {
            background: #7349bc;
          }
        `}
        onClick={() => navigate('/response')}
      >
        제출
      </button>
      <button
        type="button"
        css={css`
          color: #673ab6;
          width: auto;
          padding: 0 8px;
          :hover {
            background: #e9e7f7;
          }
        `}
      >
        양식 지우기
      </button>
    </div>
  );
};
