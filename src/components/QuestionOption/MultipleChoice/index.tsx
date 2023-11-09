import { css } from '@emotion/react';
import { BiCircle } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../Input';
import { RootState } from '../../../store';
import { removeOption } from '../../../slice/questionOptionSlice';

export const MultipleChoice = () => {
  const questionOptions = useSelector(
    (state: RootState) => state.questionOption,
  );
  const dispatch = useDispatch();

  return (
    <div
      css={css`
        height: auto;
      `}
    >
      {questionOptions.map((option, index) => {
        return (
          <label
            key={`${option}-${index - 0}`}
            htmlFor={`contents-${index + 1}`}
            css={css`
              height: auto;
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              padding-left: 4px;
              svg {
                width: 24px;
                height: 24px;
                color: #dadce0;
              }
            `}
          >
            <RxDragHandleDots2
              css={css`
                cursor: move;
              `}
            />
            <BiCircle
              css={css`
                margin-right: 8px;
              `}
            />

            <Input
              disabled={option === '기타...'}
              defaultValue={option}
              name={`contents-${index + 1}`}
              inputStyle={css`
                height: 30px;
                padding: 1px 1px 1px 0;
                font-size: 11pt;
                border-bottom: none;
                :hover {
                  border-bottom: 1px
                    ${option === '기타...' ? 'dotted' : 'solid'} #dadce0;
                }
                background: ${option === '기타...' && '#fff'};
                color: ${option === '기타...' && '#70757a'};
              `}
            />
            {index === 0 ? (
              <div
                css={css`
                  width: 56px;
                `}
              />
            ) : (
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
                  dispatch(removeOption(index));
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
            )}
          </label>
        );
      })}
    </div>
  );
};
