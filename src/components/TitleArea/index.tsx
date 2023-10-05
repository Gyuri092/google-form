import { css } from '@emotion/react';
import { Input } from '../Input';

export const TitleArea = () => {
  return (
    <div
      css={css`
        height: auto;
        position: relative;
        margin-bottom: 14px;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 10px;
          background: #673ab6;
          border-radius: 8px 8px 0 0;
        `}
      />
      <div
        css={css`
          width: 100%;
          border: 1px solid green;
          border: 1px solid #dadce0;
          border-radius: 8px;
          box-shadow:
            0 3px 3px rgba(0, 0, 0, 0.12),
            0 1px 1px rgba(0, 0, 0, 0.14),
            0 1px 2px rgba(0, 0, 0, 0.2);
          padding: 30px 20px;
        `}
      >
        <Input />
        <Input
          inputStyle={css`
            font-size: 11pt;
            height: 30px;
            margin-top: 10px;
          `}
        />
      </div>
    </div>
  );
};
