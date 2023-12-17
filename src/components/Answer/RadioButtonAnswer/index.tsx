import { css } from '@emotion/react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../../slice/answerSlice';
import { Questions } from '../../../slice/questionSlice';
import { RootState } from '../../../store';

export const RadioButtonAnswer = ({ item }: { item: Questions }) => {
  const { id, type, contents, isRequired } = item;
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const answers = useSelector((state: RootState) => state.answers);
  const dispatch = useDispatch();

  return (
    <div>
      {contents.map((option, idx) => {
        return (
          <label
            key={`${option}-${idx - 0}`}
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              padding: 8px 8px 8px 0;
              p {
                width: ${option.includes('기타')
                  ? '60px'
                  : 'calc(100% - 20px)'};
              }
            `}
          >
            <input
              required={isRequired}
              type="radio"
              name={`radio-group-${idx}`}
              css={css`
                width: 20px;
                height: 24px;
                outline: none;
                border-bottom: 1px solid #dadce0;
                font-size: 11pt;
                padding: 2px;
                margin-right: 10px;
              `}
              checked={
                answers.find((answer) => answer.id === id)?.value === option &&
                answers.find((answer) => answer.id === id)?.checked === idx
              }
              onChange={() => {
                textInputRef.current?.focus();
                dispatch(
                  updateAnswer({
                    id,
                    type,
                    isRequired,
                    value: option,
                    checked: idx,
                  }),
                );
              }}
              onBlur={() => textInputRef.current?.blur()}
            />
            <p>{option.includes('기타') ? '기타: ' : option}</p>
            {option.includes('기타') && (
              <input
                required={isRequired}
                type="text"
                name="radio-others"
                ref={textInputRef}
                css={css`
                  width: calc(100% - 100px);
                  height: 24px;
                  outline: none;
                  border-bottom: 1px solid #dadce0;
                  font-size: 11pt;
                  padding: 2px;
                  margin-right: 10px;
                `}
                onChange={(e) => {
                  if (e.target.value) {
                    dispatch(
                      updateAnswer({
                        id,
                        type,
                        isRequired,
                        value: e.target.value,
                        checked: idx,
                      }),
                    );
                  }
                }}
                onBlur={() => textInputRef.current?.blur()}
              />
            )}
          </label>
        );
      })}

      {answers.map((answer, idx) => {
        return (
          answer.value && (
            <div
              key={`${answer}-${idx - 0}`}
              css={css`
                display: flex;
                justify-content: flex-end;
                height: ${answer ? '36px' : '0px'};
                transition: height 0.3s ease-in-out;
              `}
            >
              {answer && (
                <button
                  type="button"
                  css={css`
                    width: auto;
                    font-size: 14px;
                    padding: 0 8px;
                    border-radius: 4px;
                    color: #5f6368;
                    font-weight: 500;
                    line-height: 36px;
                    letter-spacing: 0.25px;
                    :hover {
                      background: #f9f9f9;
                    }
                  `}
                  onClick={() => {
                    dispatch(
                      updateAnswer({
                        id,
                        type,
                        isRequired,
                        value: '',
                        checked: undefined,
                      }),
                    );
                  }}
                >
                  선택해제
                </button>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};
