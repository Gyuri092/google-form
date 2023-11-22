import { css } from '@emotion/react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AnswerInput } from '../AnswerInput';

export const AnswerArea = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const questions = useSelector((state: RootState) => state.questions);

  return (
    <>
      {questions.map((item, index) => (
        <form
          key={`${item.title}-${index - 0}`}
          ref={formRef}
          css={css`
            height: auto;
            border: 1px solid #dadce0;
            border-radius: 8px;
            padding: 24px;
            position: relative;
            box-sizing: border-box;
            background: #fff;
            margin-bottom: 20px;
          `}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: 24px;
                margin-bottom: 16px;
              `}
            >
              {item.title}
            </div>
            <AnswerInput item={item} />
          </div>
        </form>
      ))}
    </>
  );
};
