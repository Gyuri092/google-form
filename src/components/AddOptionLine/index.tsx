import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';

export const AddOptionLine = () => {
  return (
    <label
      htmlFor="addOpttion"
      css={css`
        height: auto;
        display: flex;
        align-items: center;
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
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <input
          type="text"
          defaultValue="옵션 추가"
          css={css`
            width: 60px;
            height: 30px;
            padding: 1px 2px 1px 0;
            outline: none;
            font-size: 11pt;
            color: #202124;
            text-align: center;
            margin: 0 6px 0 0;
            &:hover {
              border-bottom: 1px solid #dadce0;
            }
          `}
        />
        또는
        <button
          type="button"
          css={css`
            width: auto;
            font-size: 14px;
            text-align: center;
            line-height: 36px;
            color: #1a73e8;
            border-radius: 4px;
            margin: 0 6px;
            &:hover {
              background: #f8faff;
            }
          `}
        >{`'기타' 추가`}</button>
      </div>
    </label>
  );
};
