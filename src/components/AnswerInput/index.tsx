import { css } from '@emotion/react';
import { LiaChevronCircleDownSolid } from 'react-icons/lia';
import { MdOutlineCheckBox, MdOutlineRadioButtonChecked } from 'react-icons/md';
import { useRef, useState } from 'react';
import { Questions } from '../../slice/questionSlice';

export const AnswerInput = ({ item }: { item: Questions }) => {
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const renderIcon = () => {
    switch (item.type) {
      case 'multiple-choice-questions':
        return (
          <MdOutlineRadioButtonChecked
            css={css`
              width: 24px;
              height: 24px;
              color: #5f6367;
              margin-right: 8px;
            `}
          />
        );

      case 'check-box':
        return (
          <MdOutlineCheckBox
            css={css`
              width: 24px;
              height: 24px;
              color: #5f6367;
              margin-right: 8px;
            `}
          />
        );
      case 'drop-down':
        return (
          <LiaChevronCircleDownSolid
            css={css`
              width: 24px;
              height: 24px;
              color: #5f6367;
              margin-right: 8px;
            `}
          />
        );
      default:
        return null;
    }
  };
  const renderAnswer = () => {
    const { type, contents } = item;
    if (
      type === 'multiple-choice-questions' ||
      type === 'check-box' ||
      type === 'drop-down'
    ) {
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
              type="text"
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
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) {
                  setIsChecked(true);
                }
              }}
            />
          </label>
        );
      });
    }
    return (
      <input
        type="text"
        placeholder="내 답변"
        css={css`
          width: 50%;
          height: 24px;
          outline: none;
          border-bottom: 1px solid #dadce0;
          font-size: 11pt;
          padding: 2px;
        `}
        defaultValue=""
      />
    );
  };
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      {renderAnswer()}
    </div>
  );
};
