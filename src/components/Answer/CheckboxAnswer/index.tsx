import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnswer } from '../../../slice/answerSlice';
import { Questions } from '../../../slice/questionSlice';

export const CheckboxAnswer = ({ item }: { item: Questions }) => {
  const { id, type, contents, isRequired } = item;
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  return contents.map((option, idx) => {
    if (!option.includes('기타')) {
      return (
        <label
          key={`${option}-${idx - 0}`}
          css={css`
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px 8px 8px 0;
            p {
              width: calc(100% - 20px);
            }
          `}
        >
          <input
            required={isRequired}
            type="checkbox"
            name="checkbox"
            css={css`
              width: 20px;
              height: 24px;
              outline: none;
              border-bottom: 1px solid #dadce0;
              font-size: 11pt;
              padding: 2px;
              margin-right: 10px;
            `}
            onChange={() =>
              dispatch(
                updateAnswer({ id, type, isRequired, value: option ?? '' }),
              )
            }
          />
          <p>{option}</p>
        </label>
      );
    }

    return (
      <label
        key={`${option}-${idx - 0}`}
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          padding: 8px 8px 8px 0;
          p {
            width: 60px;
          }
        `}
      >
        <input
          required={isRequired}
          type="checkbox"
          css={css`
            width: 20px;
            height: 24px;
            outline: none;
            border-bottom: 1px solid #dadce0;
            font-size: 11pt;
            padding: 2px;
            margin-right: 10px;
          `}
          onChange={() => {
            textInputRef.current?.focus();
            setIsChecked((prev) => !prev);
          }}
          onBlur={() => textInputRef.current?.blur()}
          checked={isChecked}
        />
        <p>기타: </p>
        <input
          required={isRequired}
          type="text"
          name="check-others"
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
              setIsChecked(true);
              dispatch(
                updateAnswer({
                  id,
                  type,
                  isRequired,
                  value: e.target.value,
                }),
              );
            }
          }}
        />
      </label>
    );
  });
};
