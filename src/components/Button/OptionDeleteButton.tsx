import { css } from '@emotion/react';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { removeOption } from '../../slice/questionSlice';

export const OptionDeleteButton = ({
  questionIndex,
  index,
}: {
  questionIndex: number;
  index: number;
}) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      css={css`
        width: 36px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        position: relative;
        :hover {
          background: #f3f3f3;
          p {
            opacity: 1;
          }
        }
        svg {
          width: 24px;
          height: 24px;
        }
        svg > path {
          fill: #5f6368;
        }
      `}
      onClick={() => {
        dispatch(removeOption({ id: questionIndex + 1, index }));
      }}
    >
      <CgClose />
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
          left: -6px;
          bottom: -24px;
          opacity: 0;
        `}
      >
        삭제
      </p>
    </button>
  );
};
