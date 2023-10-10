import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';
import { Input } from '../Input';

export const QuestionOption = () => {
  return (
    <label
      htmlFor="defaultQuestion"
      css={css`
        height: auto;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      `}
    >
      <BiCircle
        css={css`
          width: 24px;
          height: 24px;
          color: #dadce0;
          margin-right: 8px;
        `}
      />
      <Input
        defaultValue="옵션 1"
        name="defaultQuestion"
        inputStyle={css`
          height: 30px;
          padding: 1px 1px 1px 0;
          font-size: 11pt;
        `}
      />
    </label>
  );
};
