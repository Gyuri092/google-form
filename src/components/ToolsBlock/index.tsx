import { css } from '@emotion/react';
import { useState } from 'react';
import { CgTrash } from 'react-icons/cg';
import { MdContentCopy } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeQuestion, updateRequired } from '../../slice/questionSlice';
import { RootState } from '../../store';

export const ToolsBlock = ({ questionIndex }: { questionIndex: number }) => {
  const [hoverItem, setHoverItem] = useState('');
  const question = useSelector(
    (state: RootState) => state.questions[questionIndex],
  );
  const id = question?.id || 1;
  const isRequired = question?.isRequired ?? false;
  const dispatch = useDispatch();
  return (
    <div
      css={css`
        width: auto;
        height: 64px;
        border-top: 1px solid #dadce0;
        margin: 24px 0 0 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: auto;
            height: auto;
            display: flex;
            position: relative;
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
            type="submit"
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
            onClick={() => dispatch(removeQuestion(id))}
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
              left: ${hoverItem === 'copy' ? '2px' : '52px'};
              bottom: -24px;
              opacity: ${hoverItem === '' && 0};
            `}
          >
            {hoverItem === 'copy' ? '복사' : '삭제'}
          </p>
        </div>

        <div
          css={css`
            border-left: 1px solid #dadce0;
            height: 32px;
            margin: 0 16px;
            width: 0;
          `}
        />
        <label
          css={css`
            font-size: 14px;
            color: #202124;
            position: relative;
            display: flex;
            width: 80px;
            height: 14px;
            vertical-align: middle;
            input {
              display: none;
            }
            div {
              cursor: pointer;
              background-color: ${isRequired ? '#e1d8f1' : '#b9b9b9'};
              transition: 0.4s;
              border-radius: 34px;
              :before {
                border-radius: 50%;
                position: absolute;
                content: '';
                height: 20px;
                width: 20px;
                left: 40px;
                bottom: -4px;
                border: 1px solid ${isRequired ? '#e1d8f1' : '#b9b9b9'};
                background-color: ${isRequired ? '#673ab7' : '#fff'};
                transition: 0.4s;
                transform: ${isRequired ? 'translateX(20px)' : 'translateX(0)'};
              }
            }
          `}
        >
          <span
            css={css`
              display: block;
            `}
          >
            필수
          </span>
          <input
            type="checkbox"
            name="is-required"
            checked={isRequired}
            onChange={() =>
              dispatch(
                updateRequired({
                  id,
                  isRequired: !isRequired,
                }),
              )
            }
          />
          <div />
        </label>
      </div>
    </div>
  );
};
