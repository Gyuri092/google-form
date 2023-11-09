import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { addOption } from '../../slice/questionOptionSlice';
import { RootState } from '../../store';

export const AddOptionLine = () => {
  const questionOptions = useSelector(
    (state: RootState) => state.questionOption,
  );
  const dispatch = useDispatch();

  const isIncludedOthers = questionOptions.includes('기타...');
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
        <button
          type="button"
          css={css`
            width: 60px;
            height: 30px;
            display: flex;
            align-items: center;
            padding: 1px 2px 1px 0;
            outline: none;
            font-size: 11pt;
            color: #70757a;
            text-align: center;
            margin: 0 6px 0 0;
            &:hover {
              border-bottom: 1px solid #dadce0;
            }
          `}
          onClick={() =>
            dispatch(addOption(`옵션 ${questionOptions.length + 1}`))
          }
        >
          옵션 추가
        </button>
        {isIncludedOthers ? null : (
          <>
            <span
              css={css`
                width: auto;
              `}
            >
              또는
            </span>
            <button
              type="button"
              css={css`
                width: 70px;
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
              onClick={() => dispatch(addOption('기타...'))}
            >{`'기타' 추가`}</button>
          </>
        )}
      </div>
    </label>
  );
};
