import { css } from '@emotion/react';
import { GrTextAlignFull } from 'react-icons/gr';
import { LiaChevronCircleDownSolid } from 'react-icons/lia';
import {
  MdOutlineRadioButtonChecked,
  MdOutlineCheckBox,
  MdOutlineShortText,
} from 'react-icons/md';
import { Questions } from '../../slice/questionSlice';

export const AnswerInput = ({ item }: { item: Questions }) => {
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
        return (
          <input
            key={`${option}-${idx - 0}`}
            css={css`
              height: 24px;
              outline: none;
              border-bottom: 1px solid #dadce0;
              font-size: 11pt;
              padding: 2px;
            `}
            defaultValue={option}
          />
        );
      });
    }
    return (
      <input
        placeholder="내 답변"
        css={css`
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
        width: 446px;
      `}
    >
      {renderAnswer()}
    </div>
  );
};
