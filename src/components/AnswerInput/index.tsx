import { css } from '@emotion/react';
import { LiaChevronCircleDownSolid } from 'react-icons/lia';
import { MdOutlineCheckBox, MdOutlineRadioButtonChecked } from 'react-icons/md';

import { Questions } from '../../slice/questionSlice';
import { CheckboxAnswer } from '../CheckboxAnswer';
import { DropDownAnswer } from '../DropDownAnswer';

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
    if (type === 'multiple-choice-questions' || type === 'check-box') {
      return <CheckboxAnswer contents={contents} />;
    }
    if (type === 'drop-down') {
      return <DropDownAnswer contents={contents} />;
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
