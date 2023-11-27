import { css } from '@emotion/react';

import { Questions } from '../../slice/questionSlice';
import { CheckboxAnswer } from '../CheckboxAnswer';
import { DropDownAnswer } from '../DropDownAnswer';
import { RadioButtonAnswer } from '../RadioButtonAnswer';

export const AnswerInput = ({ item }: { item: Questions }) => {
  const renderAnswer = () => {
    const { type, contents } = item;
    if (type === 'multiple-choice-questions') {
      return <RadioButtonAnswer contents={contents} />;
    }
    if (type === 'check-box') {
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
