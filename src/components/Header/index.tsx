import { css } from '@emotion/react';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export const Header = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100px;
        background: #fff;
        padding: 0 60px 0 60px;
      `}
    >
      <div
        css={css`
          width: 300px;
          height: 80px;
          display: flex;
          align-items: center;
          padding-top: 6px;
        `}
      >
        <IoDocumentTextSharp
          css={css`
            width: 40px;
            height: 60px;
            fill: #7148b9;
            margin-right: 26px;
          `}
        />
        <Input
          inputStyle={css`
            width: 127px;
            height: 24px;
            font-size: 16px;
            font-weight: 400;
          `}
          borderStyle={css`
            width: 127px;
            background: #000;
          `}
        />
        <Link
          to="/preview"
          type="button"
          css={css`
            width: 80px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            :hover {
              background: #f3f3f3;
            }
          `}
          target="_blank"
        >
          <MdOutlineRemoveRedEye
            css={css`
              width: 24px;
              height: 24px;
              fill: #5f6368;
            `}
          />
        </Link>
      </div>
      <div
        css={css`
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            width: auto;
            font-size: 14px;
          }
        `}
      >
        <div
          css={css`
            width: 140px;
            display: flex;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              width: 40px;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              color: #7148b9;
              span {
                margin-bottom: 4px;
              }
            `}
          >
            <span>질문</span>
            <div
              css={css`
                width: 40px;
                height: 3px;
                background: #673ab6;
                border-radius: 8px 8px 0 0;
              `}
            />
          </div>
          <span>응답</span>
          <span>설정</span>
        </div>
      </div>
    </div>
  );
};
