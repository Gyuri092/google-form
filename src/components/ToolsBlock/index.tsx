import { css } from '@emotion/react';
import { useState } from 'react';
import { CgTrash } from 'react-icons/cg';
import { MdContentCopy } from 'react-icons/md';

export const ToolsBlock = () => {
  const [hoverItem, setHoverItem] = useState('');

  return (
    <div
      css={css`
        width: 100%;
        height: 64px;
        border-top: 1px solid #dadce0;
        margin-top: 24px;
        padding: 0 24px 0 24px;
      `}
    >
      <div
        css={css`
          display: flex;
          position: relative;
          justify-content: flex-end;
          align-items: center;
          button {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg {
              width: 24px;
              height: 24px;
              color: #5f6368;
            }
            :hover {
              background: #f3f3f3;
            }
          }
        `}
      >
        <button
          type="button"
          onMouseOver={() => setHoverItem('copy')}
          onMouseOut={() => setHoverItem('')}
          onFocus={() => setHoverItem('copy')}
          onBlur={() => setHoverItem('')}
        >
          <MdContentCopy />
        </button>
        <button
          type="button"
          onMouseOver={() => setHoverItem('delete')}
          onMouseOut={() => setHoverItem('')}
          onFocus={() => setHoverItem('delete')}
          onBlur={() => setHoverItem('')}
        >
          <CgTrash />
        </button>
        <p
          css={css`
            width: 44px;
            height: 24px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: ${hoverItem === 'copy' ? '48px' : '0'};
            bottom: -10px;
            opacity: ${hoverItem === '' && 0};
          `}
        >
          {hoverItem === 'copy' ? '복사' : '삭제'}
        </p>
      </div>
    </div>
  );
};
