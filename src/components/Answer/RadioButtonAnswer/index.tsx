import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../../slice/answerSlice';
import { Questions } from '../../../slice/questionSlice';
import { RootState } from '../../../store';

export const RadioButtonAnswer = ({ item }: { item: Questions }) => {
  const { id, type, contents, isRequired } = item;
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const answers = useSelector((state: RootState) => state.answers);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [others, setOthers] = useState<number | null>(null);

  return (
    <div>
      {contents.map((option, idx) => {
        return (
          <label
            key={`${id}-${idx - 0}`}
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
              name={`radio-group-${id}`}
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
                (answers.find((answer) => answer.id === id)?.value === option &&
                  answers.find((answer) => answer.id === id)?.checked ===
                    idx) ||
                ((answers.find((answer) => answer.id === id)?.checked === idx &&
                  idx) === others &&
                  isChecked)
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
                setIsChecked(true);
              }}
              onBlur={() => textInputRef.current?.blur()}
            />
            <p>{option.includes('기타') ? '기타: ' : option}</p>
            {option.includes('기타') && (
              <input
                required={
                  isRequired &&
                  answers.find((answer) => answer.id === id)?.checked === others
                }
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
                value={
                  answers.find((answer) => answer.id === id)?.checked === others
                    ? answers.find((answer) => answer.id === id)?.value
                    : ''
                }
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
                    setOthers(idx);
                    setIsChecked(true);
                  } else {
                    setOthers(null);
                  }
                }}
                onBlur={() => textInputRef.current?.blur()}
              />
            )}
          </label>
        );
      })}

      {isChecked &&
        answers.map((answer) => answer.checked !== undefined).length > 0 && (
          <div
            key="unchecked-answer"
            css={css`
              display: flex;
              justify-content: flex-end;
              height: 36px;
              transition: height 0.3s ease-in-out;
            `}
          >
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
                setIsChecked(false);
              }}
            >
              선택해제
            </button>
          </div>
        )}
    </div>
  );
};
