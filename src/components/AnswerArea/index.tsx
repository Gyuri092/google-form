import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Input } from '../Input';

export const AnswerArea = () => {
  const [isFocused, setIsFocused] = useState(true);
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
            padding: 4px 20px 0 0;
            position: relative;
            box-sizing: border-box;
            box-shadow: ${isFocused && '0 3px 3px rgba(0, 0, 0, 0.12)'},
              ${isFocused && '0 1px 1px rgba(0, 0, 0, 0.14)'},
              ${isFocused && '0 1px 2px rgba(0, 0, 0, 0.2)'};
            background: #fff;
            margin-bottom: 20px;
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div
            css={css`
              height: 50px;
              display: flex;
              justify-content: space-between;
              margin-bottom: 16px;
              padding-left: 20px;
            `}
          >
            <div
              css={css`
                width: 446px;
              `}
            >
              <Input
                placeholder="질문"
                name="title"
                inputStyle={css`
                  font-size: 11pt;
                  padding: 16px;
                  &:focus {
                    background-color: #f1f3f4;
                    &:hover {
                      background-color: #0000001a;
                    }
                  }
                `}
                defaultValue={item.title}
              />
            </div>
          </div>
        </form>
      ))}
    </>
  );
};
