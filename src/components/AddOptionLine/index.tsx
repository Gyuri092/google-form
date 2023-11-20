import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { addOption } from '../../slice/questionSlice';
import { RootState } from '../../store';
import { IndexIcon } from '../Icon/IndexIcon';

export const AddOptionLine = ({ questionIndex }: { questionIndex: number }) => {
  const question = useSelector(
    (state: RootState) => state.questions[questionIndex],
  );
  const questionOptions = question?.contents || [];
  const id = question?.id || 1;

  const dispatch = useDispatch();

  const isDropDown = question?.type === 'drop-down';
  const isIncludedOthers = questionOptions.includes('기타...');
  return (
    <label
      htmlFor="addOpttion"
      css={css`
        height: auto;
        display: flex;
        align-items: center;
        padding: 0 20px 0 24px;
      `}
    >
      <IndexIcon questionIndex={questionIndex} index={questionOptions.length} />
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
            dispatch(
              addOption({
                id,
                option: `옵션 ${questionOptions.length + 1}`,
              }),
            )
          }
        >
          옵션 추가
        </button>
        {isIncludedOthers || isDropDown ? null : (
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
              onClick={() => dispatch(addOption({ id, option: '기타...' }))}
            >{`'기타' 추가`}</button>
          </>
        )}
      </div>
    </label>
  );
};
