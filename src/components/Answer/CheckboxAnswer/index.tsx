import { css } from '@emotion/react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAnswer } from '../../../slice/answerSlice';
import { Questions } from '../../../slice/questionSlice';
import { RootState } from '../../../store';

export const CheckboxAnswer = ({ item }: { item: Questions }) => {
  const { id, type, contents, isRequired } = item;
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.answers);

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
            checked={
              answers
                .find((answer) => answer.id === id)
                ?.checked?.includes(idx) ?? false
            }
            onChange={() => {
              const existingChecked =
                answers.find((answer) => answer.id === id)?.checked || [];
              const updatedChecked = existingChecked.includes(idx)
                ? [...existingChecked.filter((value) => value !== idx)]
                : [...existingChecked.filter((value) => value !== idx), idx];

              dispatch(
                updateAnswer({
                  id,
                  type,
                  isRequired,
                  value: option ?? '',
                  checked: updatedChecked.sort((a, b) => a - b),
                }),
              );
            }}
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
          checked={answers
            .find((answer) => answer.id === id)
            ?.checked?.includes(idx)}
          onChange={() => {
            textInputRef.current?.focus();
            const existingChecked =
              answers.find((answer) => answer.id === id)?.checked || [];
            const updatedChecked = existingChecked.includes(idx)
              ? [...existingChecked.filter((value) => value !== idx)]
              : [...existingChecked.filter((value) => value !== idx), idx];

            dispatch(
              updateAnswer({
                id,
                type,
                isRequired,
                value: option ?? '',
                checked: updatedChecked.sort((a, b) => a - b),
              }),
            );
          }}
          onBlur={() => textInputRef.current?.blur()}
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
          value={answers.find((answer) => answer.id === id)?.value}
          onChange={(e) => {
            if (!answers.find((answer) => answer.id === id)?.value) {
              const existingChecked =
                answers.find((answer) => answer.id === id)?.checked || [];
              const updatedChecked = existingChecked.includes(idx)
                ? [...existingChecked.filter((value) => value !== idx)]
                : [...existingChecked.filter((value) => value !== idx), idx];
              dispatch(
                updateAnswer({
                  id,
                  type,
                  isRequired,
                  value: e.target.value,
                  checked: updatedChecked.sort((a, b) => a - b),
                }),
              );
            }
            dispatch(
              updateAnswer({
                id,
                type,
                isRequired,
                value: e.target.value,
              }),
            );
          }}
        />
      </label>
    );
  });
};
