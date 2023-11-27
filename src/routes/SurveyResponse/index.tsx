import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Input } from '../../components/Input';
import { RootState } from '../../store';

export const SurveyResponse = () => {
  const title = useSelector((state: RootState) => state.title);
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
              position: relative;
              input {
                background: #fff;
                color: #000;
                border: none;
                padding-bottom: 16px;
              }
              p,
              a {
                font-size: 14px;
                margin-bottom: 24px;
              }
              a {
                text-decoration: underline;
                color: #1a73e8;
              }
            `}
          >
            <Input disabled placeholder="설문지 제목" value={title.title} />
            <p>응답이 기록되었습니다.</p>
            <a href="/preview">다른 응답 제출</a>
          </form>
        </div>
      </div>
    </div>
  );
};
